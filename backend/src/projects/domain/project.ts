export class Project {
	public readonly projectId: string;
	public readonly title: string;
	public readonly description: string;
	public readonly userId: string;

	private constructor(
		projectId: string,
		title: string,
		description: string,
		userId: string,
	) {
		this.projectId = projectId;
		this.title = title;
		this.description = description;
		this.userId = userId;
	}

	public static create(
		projectId: string,
		title: string,
		description: string,
		userId: string,
	): Project {
		return new Project(projectId, title, description, userId);
	}
}
