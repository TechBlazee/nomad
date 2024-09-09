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
    <div className="mt-2 bg-red-500">
      {loading && <progress className="w-full" />}
      <input
        disabled={loading}
        type="text"
        className="form-control w-full"
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