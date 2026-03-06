import "dotenv/config";
import { createApp } from "./common/infrastructure/express";

const app = createApp();

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
