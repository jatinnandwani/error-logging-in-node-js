const findAccount = query => {
    if (!query) return null;
    return {
      account: "JatinNandwani",
      password: "@pasionate",
      email: "jatinNandwani@gm.com",
      address: {
        street: "Banglore",
        zip: "1337",
        city: "Electronic City"
      }
    };
  };
  
  module.exports = {
    findAccount
  };
  