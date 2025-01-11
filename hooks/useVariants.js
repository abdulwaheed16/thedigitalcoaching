const useVariants = (status) => {
  const variants = {
    hidden: (status) => ({
      opacity: 0,
      x: status === "ascending" ? "100%" : "-100%",
    }),
    visible: { x: 0, opacity: 1 },
    exit: (status) => ({
      opacity: 0,
      x: status === "ascending" ? "-100%" : "100%",
      transition: {
        ease: "easeOut",
        duration: 3,
      },
    }),
  };

  return { variants };
};

export default useVariants;
