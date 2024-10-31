import { useState } from "react";
import PropTypes from "prop-types";

const InputBox = ({ sendMessage, loading }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="mt-2 ">
      {loading && <progress className="w-full border-4 progress-green" />}
      <input
        disabled={loading}
        type="text"
        className="form-control w-full border-2 border-teal-500 rounded-lg p-2 mb-4"
        placeholder=" Ask a question..."
        value={loading ? "Loading..." : input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

InputBox.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default InputBox;
