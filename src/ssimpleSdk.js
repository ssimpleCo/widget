class ssimpleWidget {
	init = ({ appId: clientId, btnColor }) => {
		this.mountIframe(clientId, btnColor);
	}

	mountIframe = (clientId, btnColor) => {
		const styleTag = `
      <style>
				#ssimpleWidget {
					position: fixed;
					bottom: 20px;
					right: 20px;
					z-index: 999999999 !important;
				}
				#ssimpleWidgetBtn {
					box-sizing: border-box;
					margin-left: auto;
					margin-top: auto;
					display: inline-flex;
					height: 3rem;
					width: 3rem;
					align-items: center;
					justify-content: center;
					border-radius: 9999px;
					color: white;
					cursor: pointer;
					background-color: ` + btnColor + `;
					border-style: none;
				}
      </style>
		`;

		const components = {
			icon_close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>`,
			icon_report: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 L 24 0 L 24 12 C 24 18.627 18.627 24 12 24 Z M 13.019 5.272 L 10.981 5.272 L 10.981 7.31 L 13.019 7.31 L 13.019 5.272 Z M 13.057 13.115 L 12.788 8.251 L 11.212 8.251 L 10.943 13.115 L 10.943 18.728 L 13.057 18.728 L 13.057 13.115 Z" style="fill: rgb(255, 255, 255); transform-origin: 12px 12px;" transform="matrix(-1, 0, 0, -1, 0.000001907349, 0.000001907349)"></path></svg>`,
		};

		// create iframe
		const iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.style.border = "none";
		iframe.style.position = "fixed";
		iframe.style.inset = "auto 15px 75px auto";
		iframe.style.width = "420px";
		iframe.style.height = "70vh";
		iframe.style.borderWidth = "1px";
		iframe.style.borderRadius = "16px";
		iframe.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px";
		iframe.style.opacity = "1";
		iframe.style.maxWidth = "100vw";
		iframe.style.maxHeight = "100vh";
		iframe.style.visibility = "visible";
		iframe.style.zIndex = "999999999";

		iframe.src = 'https://' + clientId + '.ssimple.co/widget';
		// iframe.src = 'http://localhost:3000/widget';
		iframe.crossorigin = "anonymous";
		this.iframe = iframe;
		window.addEventListener("message", this.receiveMessage);

		// create widget trigger button
		const btn = document.createElement('button');
		btn.id = "ssimpleWidgetBtn";
		btn.innerHTML = components.icon_report;
		btn.addEventListener("click", () => {
			if (btn.innerHTML === components.icon_report) {
				btn.innerHTML = components.icon_close;
				iframe.style.display = "block";
			} else {
				btn.innerHTML = components.icon_report;
				iframe.style.display = "none";
			}
		});
		this.btn = btn;

		const wrapper = document.createElement('div');
		wrapper.id = "ssimpleWidget";
		wrapper.appendChild(this.iframe);
		wrapper.appendChild(this.btn);

		document.head.insertAdjacentHTML("beforeend", styleTag);
		document.body.appendChild(wrapper);

		// capture console messages
		if (console.everything === undefined) {
			console.everything = [];

			window.onerror = function (error, url, line) {
				console.everything.push({
					type: "exception",
					time_stamp: Date.now(),
					value: [error]
				});
				return false;
			}
			window.onunhandledrejection = function (e) {
				console.everything.push({
					type: "promiseRejection",
					time_stamp: Date.now(),
					value: [e.reason]
				});
			}

			function hookLogType(logType) {
				const original = console[logType].bind(console);
				return function () {
					console.everything.push({
						type: logType,
						time_stamp: Date.now(),
						value: Array.from(arguments)
					});
					original.apply(console, arguments);
				}
			}

			['log', 'error', 'warn', 'debug'].forEach(logType => {
				console[logType] = hookLogType(logType);
			});
		}
	}

	receiveMessage = (event) => {
		if (event.data !== 'capture') return;
		const captureScreenshot = async () => {
			const canvas = document.createElement("canvas");
			const context = canvas.getContext("2d");
			const video = document.createElement("video");

			try {
				this.iframe.style.display = "none";
				this.btn.style.display = "none";
				const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });

				video.addEventListener("loadedmetadata", () => {
					canvas.width = video.videoWidth / 2;
					canvas.height = video.videoHeight / 2;

					video.play();
					context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);
					stream.getTracks().forEach(track => track.stop());
					const screenshot = canvas.toDataURL("image/png");

					this.iframe.contentWindow.postMessage({ type: 'bug', payload: { console: console.everything, screenshot } }, '*');
					this.iframe.style.display = "block";
					this.btn.style.display = "inline-flex";
				});

				video.srcObject = stream;
			} catch (err) {
				this.iframe.style.display = "block";
				this.btn.style.display = "inline-flex";
				console.error("Error capturing screenshot: " + err);
			}
		};
		captureScreenshot();
	}
}

export default ((window) => {
	const stubSdk = window.ssimple;
	const shim = new ssimpleWidget();
	stubSdk.init = shim.init;
})(global)
