import { toast } from "react-toastify";
import { CONFIG_TOAST_DEFAULT } from "../utils/constants";

class BaseService {
    static showToaSuccess(message = MESSAGE_SUCCESS_DEFAULT) {
        toast.success(message, CONFIG_TOAST_DEFAULT);
    }

    static showMessageError(message = MESSAGE_ERROR_DEFAULT) {
        toast.error(message, CONFIG_TOAST_DEFAULT);
    }

    static showMessageWarning(message = MESSAGE_WARNING_DEFAULT) {
        toast.warning(message, CONFIG_TOAST_DEFAULT);
    }
}

export default BaseService