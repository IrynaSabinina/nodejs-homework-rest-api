const { BASE_URL } = process.env;

const creatVerifyEmail = (to, veryficationToken) => {
  const mail = {
    to,
    subject: "Verification",
    html: `<a target="_blank" href="${BASE_URL}/auth/verify/${user.veryficationToken}">Enter for verification your emal</a>`,
  };
  return mail;
};
module.exports = creatVerifyEmail;
