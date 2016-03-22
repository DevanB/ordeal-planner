Accounts.emailTemplates.resetPassword.siteName = () => 'Ordeal Planner';
Accounts.emailTemplates.resetPassword.from = () => 'Ordeal Planner Administrator <devan@devanb.us>';
Accounts.emailTemplates.resetPassword.subject = () => 'Ordeal Planner Reset Your Password';
Accounts.emailTemplates.resetPassword.text = (user, url) => {
  const emailAddress = user.emails[0].address;
  const urlWithoutHash = url.replace('#/', '');
  const supportEmail = 'support@application.com';
  const emailBody = `A password reset has been requested for the account related to this address (${emailAddress}). To reset the password, visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;
  return emailBody;
};
