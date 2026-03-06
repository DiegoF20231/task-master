export type TaskStatus = "pending" | "in_progress" | "completed";

export class Task {
	public readonly title: string;
	public readonly description: string;
	public readonly status: TaskStatus;
	public readonly userId: string;

	private constructor(
		title: string,
		description: string,
		status: TaskStatus,
		userId: string,
	) {
		this.title = title;
		this.description = description;
		this.status = status;
		this.userId = userId;
	}

	public static create(
		title: string,
		description: string,
		status: TaskStatus,
		userId: string,
	): Task {
		return new Task(title, description, status, userId);
	}
}
