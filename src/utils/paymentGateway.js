import { toast } from "react-toastify";
const loadScript = async (url) => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = url;

		script.onload = () => {
			resolve(true);
		};

		script.onerror = () => {
			resolve(false);
		};

		document.body.appendChild(script);
	});
};
export const displayRazorpay = async (
	currentUser,
	totalPrice,
	navigate,
	clearCartLocally,
    setUserDetails
) => {
	const res = await loadScript(
		"https://checkout.razorpay.com/v1/checkout.js"
	);

	if (!res) {
		
		toast.error("Razorpay SDK failed to load, check you connection",
		);
		return;
	}

	const options = {
		key: "rzp_test_AMTLVnyuQKdV7Y",
		amount: Number(totalPrice) * 100,
		currency: "INR",
		name: "Bookalley",
		image: 'https://razorpay.com/favicon.png',
		handler: function (response) {
			clearCartLocally();
            setUserDetails({...currentUser,currentpaymentID:response.razorpay_payment_id})
			navigate("/");
		},
		prefill: {
			name: `${currentUser.firstName} ${currentUser.lastName}`,
			email: currentUser.email,
			contact: "9833624957",
		},
		theme: {
			color:"#18181b",
		},
	};
	const paymentObject = new window.Razorpay(options);
	paymentObject.open();
};