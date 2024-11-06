import rateLimit from "express-rate-limit";

const otpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: "terlalu sering meminta kode otp, coba lagi setelah 5 menit",
  standardHeaders: true,
  legacyHeaders: false,
});

const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "terlalu sering reset password, coba lagi setelah 5 menit",
  standardHeaders: true,
  legacyHeaders: false,
});

export default { otpLimiter, passwordResetLimiter };
