import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://7000ec4a8c29e04d063fc2a5f3952f2d@o4509357162889216.ingest.de.sentry.io/4509357165903952",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
