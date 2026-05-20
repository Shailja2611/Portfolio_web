const Navbar = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <button
      onClick={scrollToContact}
      style={{
        background: "orange",
        position: "fixed",
        top: 10,
        right: 20,
        fontWeight: "bold",
        fontSize: "1.5rem",
        border: "none",
        borderRadius: 5,
        color: "white",
        width: 150,
        height: 60,
        zIndex: 999,
        cursor: "pointer",
      }}
    >
      Contact
    </button>
  );
};

export default Navbar;
