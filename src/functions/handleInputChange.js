export const handleInputChange = (setter) => (event) => {
  const { name, value } = event.target;
  setter((prevState) => ({ 
    ...prevState, 
    [name]: value 
}));
}