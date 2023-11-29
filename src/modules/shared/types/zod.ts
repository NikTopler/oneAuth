import { SafeParseError, SafeParseSuccess, z } from "zod";

type SafeParseResult<T> = SafeParseSuccess<T> | SafeParseError<T>;

export default SafeParseResult;
