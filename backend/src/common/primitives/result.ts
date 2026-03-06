export class Result<TValue> {
	private constructor(
		public readonly isSuccess: boolean,
		public readonly isFailure: boolean,
		public readonly value?: TValue,
		public readonly error?: Error,
	) {}

	public static success<TValue>(value: TValue): Result<TValue> {
		return new Result<TValue>(true, false, value, undefined);
	}

	public static fail<TValue>(error: Error): Result<TValue> {
		return new Result<TValue>(false, true, undefined, error);
	}

	getResult(): TValue | undefined {
		return this.value;
	}

	getError(): Error | undefined {
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

	match<R>(onSuccess: (value: TValue) => R, onFailure: (error: Error) => R): R {
		if (this.isSuccess && this.value !== undefined) {
			return onSuccess(this.value);
		}
		return onFailure(this.error!);
	}
}
