export class ProblemDetails {
	public readonly type: string;
	public readonly title: string;
	public readonly status: number;
	public readonly detail: string;
	public readonly instance: string;
	public readonly errors: ValidationError[];

	public constructor(
		type: string,
		title: string,
		status: number,
		detail: string,
		instance: string,
		errors: ValidationError[],
	) {
		this.type = type;
		this.title = title;
		this.status = status;
		this.detail = detail;
		this.instance = instance;
		this.errors = errors;
	}

	public static create(
		type: string,
		title: string,
		status: number,
		detail: string,
		instance: string,
		errors: ValidationError[],
	) {
		return new ProblemDetails(type, title, status, detail, instance, errors);
	}
}

interface ValidationError {
	field: string;
	message: string | null;
}
