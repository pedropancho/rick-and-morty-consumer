export abstract class IdentifiedError extends Error {
	constructor(
		public readonly type: string,
		public readonly name: string,
		message: string,
		public readonly data?: unknown
	) {
		super(message);
	}
}
