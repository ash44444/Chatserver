const corsOptions = {
  origin: [
    "https://chatserver-tqx3.onrender.com"
"https://chatfrontend-one.vercel.app/login"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
