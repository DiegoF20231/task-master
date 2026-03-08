export abstract class Command<TResponse> {
	protected readonly _response: TResponse;
}
export abstract class Query<TResponse> {
	protected readonly _response: TResponse;
}

export interface CommandHandler<
	TCommand extends Command<TResponse>,
	TResponse,
> {
	handle(command: TCommand): Promise<TResponse>;
}

export interface QueryHandler<TQuery extends Query<TResponse>, TResponse> {
	handle(query: TQuery): Promise<TResponse>;
}
