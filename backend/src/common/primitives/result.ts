import { AppError } from "./error";

export class Result<TValue> {
	public readonly isSuccess: boolean;
	public readonly value?: TValue;
	public readonly error?: AppError;

	private constructor(isSuccess: boolean, value?: TValue, error?: AppError) {
		this.isSuccess = isSuccess;
		this.value = value;
		this.error = error;
	}

	public static success<TValue>(value: TValue): Result<TValue> {
		return new Result<TValue>(true, value, undefined);
	}

	public static fail<TValue>(error: AppError): Result<TValue> {
		return new Result<TValue>(false, undefined, error);
	}

	getResult(): TValue | undefined {
		return this.value;
	}

	getError(): AppError | undefined {
		return this.error;
	}

	map<U>(fn: (value: TValue) => U): Result<U> {
		if (this.isSuccess && this.value !== undefined) {
			return Result.success(fn(this.value));
		}
		return Result.fail(this.error!);
	}

	flatMap<U>(fn: (value: TValue) => Result<U>): Result<U> {
		if (this.isSuccess && this.value !== undefined) {
			return fn(this.value);
		}
		return Result.fail(this.error!);
	}

	match<R>(
		onSuccess: (value: TValue) => R,
		onFailure: (error: AppError) => R,
	): R {
		if (this.isSuccess && this.value !== undefined) {
			return onSuccess(this.value);
		}
		return onFailure(this.error!);
	}
}
