//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
	const codes = document.querySelectorAll(".code");

	// Focus first input initially
	codes[0].focus();

	codes.forEach((code, index) => {

		// Handle typing forward
		code.addEventListener("input", (e) => {
			const value = e.target.value;

			// Allow only digits
			if (!/^[0-9]$/.test(value)) {
				code.value = "";
				return;
			}

			// Move to next input
			if (index < codes.length - 1) {
				codes[index + 1].focus();
			}
		});

		// Handle backspace
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