import fallbackImage from "../assets/avatar.jpg";

const EmployeeAvatar = ({ employee = {}, className = "", size = "" }) => {
  const handleImageError = (event) => {
    // A missing employee photo should never appear as a broken image.
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <img
      src={employee.image || fallbackImage}
      alt={employee.name ? `${employee.name}'s profile` : "Employee profile"}
      loading="lazy"
      className={`${size} ${className}`}
      onError={handleImageError}
    />
  );
};

export default EmployeeAvatar;
