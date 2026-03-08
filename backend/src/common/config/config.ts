import "dotenv/config";
export const {
	SERVER_PORT,
	DATABASE_URL,
	PASSWORD_SALTS = 10,
	JWT_SECRET,
	JWT_EXPIRATION_TIME,
	JWT_ALGORITHM = "HS256",
	JWT_ISSUER = "task_master_backend",
	JWT_AUDIENCE = "task_master_frontend",
} = process.env;
