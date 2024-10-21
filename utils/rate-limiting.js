import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";

// IP adresini almak için yardımcı fonksiyon
const getIp = (req) =>
  req.headers["x-forwarded-for"] ||
  req.headers["x-real-ip"] ||
  req.connection.remoteAddress;

// Rate limiting ayarlarını döndüren fonksiyon
const getRateLimit = () => {
  const max = 5; // Maksimum istek sayısı
  const windowMs = 12 * 60 * 60 * 1000; // 12 saatlik pencere
  const keyGenerator = (req) => getIp(req); // IP adresine göre anahtar

  // Rate limiting ve slow down middleware'lerini oluştur
  const slowDownMiddleware = slowDown({
    keyGenerator,
    windowMs,
    delayAfter: 1, // İlk istekten sonra yavaşlat
    delayMs: 500, // Her istek sonrası 500ms yavaşlat
  });

  const rateLimitMiddleware = rateLimit({
    keyGenerator,
    windowMs,
    max,
    message: "Fazla İstek Attınız", // Hata mesajı
  });

  return [slowDownMiddleware, rateLimitMiddleware];
};

// Middleware uygulama fonksiyonu
const applyMiddleware = (middleware) => (req, res) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

// Rate limiting uygulama fonksiyonu
export const applyRateLimiting = async (req) => {
  const middlewares = getRateLimit(); // Rate limiting middleware'lerini al
  // Tüm middleware'leri uygula
  await Promise.all(
    middlewares.map(applyMiddleware).map((middleware) => middleware(req, {}))
  );
};
