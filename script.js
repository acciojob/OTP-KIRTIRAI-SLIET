//your JS code here. If required.
// document.addEventListener("DOMContentLoaded", () => {
	const codes = document.querySelectorAll(".code");

	codes[0].focus();

	codes.forEach((code, index) => {

		code.addEventListener("input", (e) => {
			const value = e.target.value;

			if (!/^[0-9]$/.test(value)) {
				code.value = "";
				return;
			}

			if (index < codes.length - 1) {
				codes[index + 1].focus();
			}
		});

		code.addEventListener("keydown", (e) => {
			if (e.key === "Backspace") {
				if (code.value === "" && index > 0) {
					codes[index - 1].focus();
					codes[index - 1].value = "";
				}
			}
		});
	});
});