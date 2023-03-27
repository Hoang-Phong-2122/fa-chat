import {toast} from "react-toastify";

const formatNumber = (number) => {
    let value = parseInt(number);
    return number ? value.toLocaleString('it-IT', {currency: 'VND'}) : 0;
}

const showToast = (type, message) => {
    if (type === 'success') {
        toast.success(message, {
            theme: "colored",
            position: "bottom-right",
            autoClose: 5000,
        });
    } else {
        toast.error(message, {
            theme: "colored",
            position: "bottom-right",
            autoClose: 5000,
        });
    }
}

export default {
    showToast,
    formatNumber
};
