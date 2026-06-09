export const emailjsConfig = {
  serviceId: (process.env.BUN_PUBLIC_EMAILJS_SERVICE_ID || "") as string,
  templateId: (process.env.BUN_PUBLIC_EMAILJS_TEMPLATE_ID || "") as string,
  publicKey: (process.env.BUN_PUBLIC_EMAILJS_PUBLIC_KEY || "") as string,
};

export const isEmailJsConfigured = (): boolean => {
  return (
    emailjsConfig.serviceId.trim() !== "" &&
    emailjsConfig.templateId.trim() !== "" &&
    emailjsConfig.publicKey.trim() !== "" &&
    emailjsConfig.serviceId !== "your_service_id" &&
    emailjsConfig.templateId !== "your_template_id" &&
    emailjsConfig.publicKey !== "your_public_key"
  );
};
