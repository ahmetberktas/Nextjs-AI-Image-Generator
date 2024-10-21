import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";

const applyMiddleware = (middleware) => (req, res) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

const getIp = (req) =>
  req.headers["x-forwarded-for"] ||
  req.headers["x-real-ip"] ||
  req.connection.remoteAddress;

const getRateLimit = () => {
  const max = 5;
  const windowMs = 12 * 60 * 60 * 1000;
  const keyGenerator = getIp;

  return [
    slowDown({ keyGenerator, windowMs }),
    rateLimit({ keyGenerator, windowMs, max }),
  ];
};

const middlewares = getRateLimit();

export const applyRateLimiting = async (req, res) => {
  await Promise.all(
    middlewares.map(applyMiddleware).map((middleware) => middleware(req, res))
  );
};
