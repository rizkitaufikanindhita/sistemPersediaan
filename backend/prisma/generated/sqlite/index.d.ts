
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model RequestDetails
 * 
 */
export type RequestDetails = $Result.DefaultSelection<Prisma.$RequestDetailsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Requests
 * const requests = await prisma.request.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Requests
   * const requests = await prisma.request.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs>;

  /**
   * `prisma.requestDetails`: Exposes CRUD operations for the **RequestDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestDetails
    * const requestDetails = await prisma.requestDetails.findMany()
    * ```
    */
  get requestDetails(): Prisma.RequestDetailsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Request: 'Request',
    RequestDetails: 'RequestDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    dbSQLite?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'request' | 'requestDetails'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>,
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      RequestDetails: {
        payload: Prisma.$RequestDetailsPayload<ExtArgs>
        fields: Prisma.RequestDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload>
          }
          findFirst: {
            args: Prisma.RequestDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload>
          }
          findMany: {
            args: Prisma.RequestDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload>[]
          }
          create: {
            args: Prisma.RequestDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload>
          }
          createMany: {
            args: Prisma.RequestDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RequestDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload>
          }
          update: {
            args: Prisma.RequestDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload>
          }
          deleteMany: {
            args: Prisma.RequestDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RequestDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RequestDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestDetailsPayload>
          }
          aggregate: {
            args: Prisma.RequestDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRequestDetails>
          }
          groupBy: {
            args: Prisma.RequestDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RequestDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<RequestDetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RequestCountOutputType
   */

  export type RequestCountOutputType = {
    requestDetails: number
  }

  export type RequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestDetails?: boolean | RequestCountOutputTypeCountRequestDetailsArgs
  }

  // Custom InputTypes

  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestCountOutputType
     */
    select?: RequestCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeCountRequestDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestDetailsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    status: number | null
  }

  export type RequestSumAggregateOutputType = {
    status: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    tanggal: string | null
    userId: string | null
    bagian: string | null
    status: number | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    tanggal: string | null
    userId: string | null
    bagian: string | null
    status: number | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    tanggal: number
    userId: number
    bagian: number
    status: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    status?: true
  }

  export type RequestSumAggregateInputType = {
    status?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    tanggal?: true
    userId?: true
    bagian?: true
    status?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    tanggal?: true
    userId?: true
    bagian?: true
    status?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    tanggal?: true
    userId?: true
    bagian?: true
    status?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    tanggal: string
    userId: string
    bagian: string
    status: number
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    userId?: boolean
    bagian?: boolean
    status?: boolean
    requestDetails?: boolean | Request$requestDetailsArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    tanggal?: boolean
    userId?: boolean
    bagian?: boolean
    status?: boolean
  }

  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestDetails?: boolean | Request$requestDetailsArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      requestDetails: Prisma.$RequestDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: string
      userId: string
      bagian: string
      status: number
    }, ExtArgs["result"]["request"]>
    composites: {}
  }


  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Request that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
    **/
    create<T extends RequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestCreateArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Requests.
     *     @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     *     @example
     *     // Create many Requests
     *     const request = await prisma.request.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
    **/
    delete<T extends RequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
    **/
    upsert<T extends RequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    requestDetails<T extends Request$requestDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Request$requestDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Request model
   */ 
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly tanggal: FieldRef<"Request", 'String'>
    readonly userId: FieldRef<"Request", 'String'>
    readonly bagian: FieldRef<"Request", 'String'>
    readonly status: FieldRef<"Request", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }


  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
  }


  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
  }


  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }


  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
  }


  /**
   * Request.requestDetails
   */
  export type Request$requestDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    where?: RequestDetailsWhereInput
    orderBy?: RequestDetailsOrderByWithRelationInput | RequestDetailsOrderByWithRelationInput[]
    cursor?: RequestDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestDetailsScalarFieldEnum | RequestDetailsScalarFieldEnum[]
  }


  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
  }



  /**
   * Model RequestDetails
   */

  export type AggregateRequestDetails = {
    _count: RequestDetailsCountAggregateOutputType | null
    _avg: RequestDetailsAvgAggregateOutputType | null
    _sum: RequestDetailsSumAggregateOutputType | null
    _min: RequestDetailsMinAggregateOutputType | null
    _max: RequestDetailsMaxAggregateOutputType | null
  }

  export type RequestDetailsAvgAggregateOutputType = {
    jumlah: number | null
  }

  export type RequestDetailsSumAggregateOutputType = {
    jumlah: number | null
  }

  export type RequestDetailsMinAggregateOutputType = {
    id: string | null
    jumlah: number | null
    barangId: string | null
    requestId: string | null
  }

  export type RequestDetailsMaxAggregateOutputType = {
    id: string | null
    jumlah: number | null
    barangId: string | null
    requestId: string | null
  }

  export type RequestDetailsCountAggregateOutputType = {
    id: number
    jumlah: number
    barangId: number
    requestId: number
    _all: number
  }


  export type RequestDetailsAvgAggregateInputType = {
    jumlah?: true
  }

  export type RequestDetailsSumAggregateInputType = {
    jumlah?: true
  }

  export type RequestDetailsMinAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    requestId?: true
  }

  export type RequestDetailsMaxAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    requestId?: true
  }

  export type RequestDetailsCountAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    requestId?: true
    _all?: true
  }

  export type RequestDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestDetails to aggregate.
     */
    where?: RequestDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailsOrderByWithRelationInput | RequestDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestDetails
    **/
    _count?: true | RequestDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestDetailsMaxAggregateInputType
  }

  export type GetRequestDetailsAggregateType<T extends RequestDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestDetails[P]>
      : GetScalarType<T[P], AggregateRequestDetails[P]>
  }




  export type RequestDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestDetailsWhereInput
    orderBy?: RequestDetailsOrderByWithAggregationInput | RequestDetailsOrderByWithAggregationInput[]
    by: RequestDetailsScalarFieldEnum[] | RequestDetailsScalarFieldEnum
    having?: RequestDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestDetailsCountAggregateInputType | true
    _avg?: RequestDetailsAvgAggregateInputType
    _sum?: RequestDetailsSumAggregateInputType
    _min?: RequestDetailsMinAggregateInputType
    _max?: RequestDetailsMaxAggregateInputType
  }

  export type RequestDetailsGroupByOutputType = {
    id: string
    jumlah: number
    barangId: string
    requestId: string
    _count: RequestDetailsCountAggregateOutputType | null
    _avg: RequestDetailsAvgAggregateOutputType | null
    _sum: RequestDetailsSumAggregateOutputType | null
    _min: RequestDetailsMinAggregateOutputType | null
    _max: RequestDetailsMaxAggregateOutputType | null
  }

  type GetRequestDetailsGroupByPayload<T extends RequestDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], RequestDetailsGroupByOutputType[P]>
        }
      >
    >


  export type RequestDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    barangId?: boolean
    requestId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestDetails"]>

  export type RequestDetailsSelectScalar = {
    id?: boolean
    jumlah?: boolean
    barangId?: boolean
    requestId?: boolean
  }

  export type RequestDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }


  export type $RequestDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestDetails"
    objects: {
      request: Prisma.$RequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jumlah: number
      barangId: string
      requestId: string
    }, ExtArgs["result"]["requestDetails"]>
    composites: {}
  }


  type RequestDetailsGetPayload<S extends boolean | null | undefined | RequestDetailsDefaultArgs> = $Result.GetResult<Prisma.$RequestDetailsPayload, S>

  type RequestDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequestDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequestDetailsCountAggregateInputType | true
    }

  export interface RequestDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestDetails'], meta: { name: 'RequestDetails' } }
    /**
     * Find zero or one RequestDetails that matches the filter.
     * @param {RequestDetailsFindUniqueArgs} args - Arguments to find a RequestDetails
     * @example
     * // Get one RequestDetails
     * const requestDetails = await prisma.requestDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RequestDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestDetailsFindUniqueOrThrowArgs} args - Arguments to find a RequestDetails
     * @example
     * // Get one RequestDetails
     * const requestDetails = await prisma.requestDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RequestDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailsFindFirstArgs} args - Arguments to find a RequestDetails
     * @example
     * // Get one RequestDetails
     * const requestDetails = await prisma.requestDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RequestDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailsFindFirstOrThrowArgs} args - Arguments to find a RequestDetails
     * @example
     * // Get one RequestDetails
     * const requestDetails = await prisma.requestDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RequestDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestDetails
     * const requestDetails = await prisma.requestDetails.findMany()
     * 
     * // Get first 10 RequestDetails
     * const requestDetails = await prisma.requestDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestDetailsWithIdOnly = await prisma.requestDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RequestDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RequestDetails.
     * @param {RequestDetailsCreateArgs} args - Arguments to create a RequestDetails.
     * @example
     * // Create one RequestDetails
     * const RequestDetails = await prisma.requestDetails.create({
     *   data: {
     *     // ... data to create a RequestDetails
     *   }
     * })
     * 
    **/
    create<T extends RequestDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDetailsCreateArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RequestDetails.
     *     @param {RequestDetailsCreateManyArgs} args - Arguments to create many RequestDetails.
     *     @example
     *     // Create many RequestDetails
     *     const requestDetails = await prisma.requestDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RequestDetails.
     * @param {RequestDetailsDeleteArgs} args - Arguments to delete one RequestDetails.
     * @example
     * // Delete one RequestDetails
     * const RequestDetails = await prisma.requestDetails.delete({
     *   where: {
     *     // ... filter to delete one RequestDetails
     *   }
     * })
     * 
    **/
    delete<T extends RequestDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDetailsDeleteArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RequestDetails.
     * @param {RequestDetailsUpdateArgs} args - Arguments to update one RequestDetails.
     * @example
     * // Update one RequestDetails
     * const requestDetails = await prisma.requestDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDetailsUpdateArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RequestDetails.
     * @param {RequestDetailsDeleteManyArgs} args - Arguments to filter RequestDetails to delete.
     * @example
     * // Delete a few RequestDetails
     * const { count } = await prisma.requestDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestDetails
     * const requestDetails = await prisma.requestDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequestDetails.
     * @param {RequestDetailsUpsertArgs} args - Arguments to update or create a RequestDetails.
     * @example
     * // Update or create a RequestDetails
     * const requestDetails = await prisma.requestDetails.upsert({
     *   create: {
     *     // ... data to create a RequestDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestDetails we want to update
     *   }
     * })
    **/
    upsert<T extends RequestDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDetailsUpsertArgs<ExtArgs>>
    ): Prisma__RequestDetailsClient<$Result.GetResult<Prisma.$RequestDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RequestDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailsCountArgs} args - Arguments to filter RequestDetails to count.
     * @example
     * // Count the number of RequestDetails
     * const count = await prisma.requestDetails.count({
     *   where: {
     *     // ... the filter for the RequestDetails we want to count
     *   }
     * })
    **/
    count<T extends RequestDetailsCountArgs>(
      args?: Subset<T, RequestDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestDetailsAggregateArgs>(args: Subset<T, RequestDetailsAggregateArgs>): Prisma.PrismaPromise<GetRequestDetailsAggregateType<T>>

    /**
     * Group by RequestDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestDetailsGroupByArgs['orderBy'] }
        : { orderBy?: RequestDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestDetails model
   */
  readonly fields: RequestDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    request<T extends RequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestDefaultArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RequestDetails model
   */ 
  interface RequestDetailsFieldRefs {
    readonly id: FieldRef<"RequestDetails", 'String'>
    readonly jumlah: FieldRef<"RequestDetails", 'Int'>
    readonly barangId: FieldRef<"RequestDetails", 'String'>
    readonly requestId: FieldRef<"RequestDetails", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RequestDetails findUnique
   */
  export type RequestDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * Filter, which RequestDetails to fetch.
     */
    where: RequestDetailsWhereUniqueInput
  }


  /**
   * RequestDetails findUniqueOrThrow
   */
  export type RequestDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * Filter, which RequestDetails to fetch.
     */
    where: RequestDetailsWhereUniqueInput
  }


  /**
   * RequestDetails findFirst
   */
  export type RequestDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * Filter, which RequestDetails to fetch.
     */
    where?: RequestDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailsOrderByWithRelationInput | RequestDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestDetails.
     */
    cursor?: RequestDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestDetails.
     */
    distinct?: RequestDetailsScalarFieldEnum | RequestDetailsScalarFieldEnum[]
  }


  /**
   * RequestDetails findFirstOrThrow
   */
  export type RequestDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * Filter, which RequestDetails to fetch.
     */
    where?: RequestDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailsOrderByWithRelationInput | RequestDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestDetails.
     */
    cursor?: RequestDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestDetails.
     */
    distinct?: RequestDetailsScalarFieldEnum | RequestDetailsScalarFieldEnum[]
  }


  /**
   * RequestDetails findMany
   */
  export type RequestDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * Filter, which RequestDetails to fetch.
     */
    where?: RequestDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDetails to fetch.
     */
    orderBy?: RequestDetailsOrderByWithRelationInput | RequestDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestDetails.
     */
    cursor?: RequestDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDetails.
     */
    skip?: number
    distinct?: RequestDetailsScalarFieldEnum | RequestDetailsScalarFieldEnum[]
  }


  /**
   * RequestDetails create
   */
  export type RequestDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestDetails.
     */
    data: XOR<RequestDetailsCreateInput, RequestDetailsUncheckedCreateInput>
  }


  /**
   * RequestDetails createMany
   */
  export type RequestDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestDetails.
     */
    data: RequestDetailsCreateManyInput | RequestDetailsCreateManyInput[]
  }


  /**
   * RequestDetails update
   */
  export type RequestDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestDetails.
     */
    data: XOR<RequestDetailsUpdateInput, RequestDetailsUncheckedUpdateInput>
    /**
     * Choose, which RequestDetails to update.
     */
    where: RequestDetailsWhereUniqueInput
  }


  /**
   * RequestDetails updateMany
   */
  export type RequestDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestDetails.
     */
    data: XOR<RequestDetailsUpdateManyMutationInput, RequestDetailsUncheckedUpdateManyInput>
    /**
     * Filter which RequestDetails to update
     */
    where?: RequestDetailsWhereInput
  }


  /**
   * RequestDetails upsert
   */
  export type RequestDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestDetails to update in case it exists.
     */
    where: RequestDetailsWhereUniqueInput
    /**
     * In case the RequestDetails found by the `where` argument doesn't exist, create a new RequestDetails with this data.
     */
    create: XOR<RequestDetailsCreateInput, RequestDetailsUncheckedCreateInput>
    /**
     * In case the RequestDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestDetailsUpdateInput, RequestDetailsUncheckedUpdateInput>
  }


  /**
   * RequestDetails delete
   */
  export type RequestDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
    /**
     * Filter which RequestDetails to delete.
     */
    where: RequestDetailsWhereUniqueInput
  }


  /**
   * RequestDetails deleteMany
   */
  export type RequestDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestDetails to delete
     */
    where?: RequestDetailsWhereInput
  }


  /**
   * RequestDetails without action
   */
  export type RequestDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDetails
     */
    select?: RequestDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestDetailsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RequestScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    userId: 'userId',
    bagian: 'bagian',
    status: 'status'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const RequestDetailsScalarFieldEnum: {
    id: 'id',
    jumlah: 'jumlah',
    barangId: 'barangId',
    requestId: 'requestId'
  };

  export type RequestDetailsScalarFieldEnum = (typeof RequestDetailsScalarFieldEnum)[keyof typeof RequestDetailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    tanggal?: StringFilter<"Request"> | string
    userId?: StringFilter<"Request"> | string
    bagian?: StringFilter<"Request"> | string
    status?: IntFilter<"Request"> | number
    requestDetails?: RequestDetailsListRelationFilter
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    status?: SortOrder
    requestDetails?: RequestDetailsOrderByRelationAggregateInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    tanggal?: StringFilter<"Request"> | string
    userId?: StringFilter<"Request"> | string
    bagian?: StringFilter<"Request"> | string
    status?: IntFilter<"Request"> | number
    requestDetails?: RequestDetailsListRelationFilter
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    status?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    tanggal?: StringWithAggregatesFilter<"Request"> | string
    userId?: StringWithAggregatesFilter<"Request"> | string
    bagian?: StringWithAggregatesFilter<"Request"> | string
    status?: IntWithAggregatesFilter<"Request"> | number
  }

  export type RequestDetailsWhereInput = {
    AND?: RequestDetailsWhereInput | RequestDetailsWhereInput[]
    OR?: RequestDetailsWhereInput[]
    NOT?: RequestDetailsWhereInput | RequestDetailsWhereInput[]
    id?: StringFilter<"RequestDetails"> | string
    jumlah?: IntFilter<"RequestDetails"> | number
    barangId?: StringFilter<"RequestDetails"> | string
    requestId?: StringFilter<"RequestDetails"> | string
    request?: XOR<RequestRelationFilter, RequestWhereInput>
  }

  export type RequestDetailsOrderByWithRelationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
    request?: RequestOrderByWithRelationInput
  }

  export type RequestDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestDetailsWhereInput | RequestDetailsWhereInput[]
    OR?: RequestDetailsWhereInput[]
    NOT?: RequestDetailsWhereInput | RequestDetailsWhereInput[]
    jumlah?: IntFilter<"RequestDetails"> | number
    barangId?: StringFilter<"RequestDetails"> | string
    requestId?: StringFilter<"RequestDetails"> | string
    request?: XOR<RequestRelationFilter, RequestWhereInput>
  }, "id">

  export type RequestDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
    _count?: RequestDetailsCountOrderByAggregateInput
    _avg?: RequestDetailsAvgOrderByAggregateInput
    _max?: RequestDetailsMaxOrderByAggregateInput
    _min?: RequestDetailsMinOrderByAggregateInput
    _sum?: RequestDetailsSumOrderByAggregateInput
  }

  export type RequestDetailsScalarWhereWithAggregatesInput = {
    AND?: RequestDetailsScalarWhereWithAggregatesInput | RequestDetailsScalarWhereWithAggregatesInput[]
    OR?: RequestDetailsScalarWhereWithAggregatesInput[]
    NOT?: RequestDetailsScalarWhereWithAggregatesInput | RequestDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestDetails"> | string
    jumlah?: IntWithAggregatesFilter<"RequestDetails"> | number
    barangId?: StringWithAggregatesFilter<"RequestDetails"> | string
    requestId?: StringWithAggregatesFilter<"RequestDetails"> | string
  }

  export type RequestCreateInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    status: number
    requestDetails?: RequestDetailsCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    status: number
    requestDetails?: RequestDetailsUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    requestDetails?: RequestDetailsUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    requestDetails?: RequestDetailsUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestCreateManyInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    status: number
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type RequestDetailsCreateInput = {
    id?: string
    jumlah: number
    barangId: string
    request: RequestCreateNestedOneWithoutRequestDetailsInput
  }

  export type RequestDetailsUncheckedCreateInput = {
    id?: string
    jumlah: number
    barangId: string
    requestId: string
  }

  export type RequestDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    request?: RequestUpdateOneRequiredWithoutRequestDetailsNestedInput
  }

  export type RequestDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestDetailsCreateManyInput = {
    id?: string
    jumlah: number
    barangId: string
    requestId: string
  }

  export type RequestDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RequestDetailsListRelationFilter = {
    every?: RequestDetailsWhereInput
    some?: RequestDetailsWhereInput
    none?: RequestDetailsWhereInput
  }

  export type RequestDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    status?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    status?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    status?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RequestRelationFilter = {
    is?: RequestWhereInput
    isNot?: RequestWhereInput
  }

  export type RequestDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
  }

  export type RequestDetailsAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type RequestDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
  }

  export type RequestDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
  }

  export type RequestDetailsSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type RequestDetailsCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestDetailsCreateWithoutRequestInput, RequestDetailsUncheckedCreateWithoutRequestInput> | RequestDetailsCreateWithoutRequestInput[] | RequestDetailsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDetailsCreateOrConnectWithoutRequestInput | RequestDetailsCreateOrConnectWithoutRequestInput[]
    createMany?: RequestDetailsCreateManyRequestInputEnvelope
    connect?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
  }

  export type RequestDetailsUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestDetailsCreateWithoutRequestInput, RequestDetailsUncheckedCreateWithoutRequestInput> | RequestDetailsCreateWithoutRequestInput[] | RequestDetailsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDetailsCreateOrConnectWithoutRequestInput | RequestDetailsCreateOrConnectWithoutRequestInput[]
    createMany?: RequestDetailsCreateManyRequestInputEnvelope
    connect?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RequestDetailsUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestDetailsCreateWithoutRequestInput, RequestDetailsUncheckedCreateWithoutRequestInput> | RequestDetailsCreateWithoutRequestInput[] | RequestDetailsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDetailsCreateOrConnectWithoutRequestInput | RequestDetailsCreateOrConnectWithoutRequestInput[]
    upsert?: RequestDetailsUpsertWithWhereUniqueWithoutRequestInput | RequestDetailsUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestDetailsCreateManyRequestInputEnvelope
    set?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    disconnect?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    delete?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    connect?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    update?: RequestDetailsUpdateWithWhereUniqueWithoutRequestInput | RequestDetailsUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestDetailsUpdateManyWithWhereWithoutRequestInput | RequestDetailsUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestDetailsScalarWhereInput | RequestDetailsScalarWhereInput[]
  }

  export type RequestDetailsUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestDetailsCreateWithoutRequestInput, RequestDetailsUncheckedCreateWithoutRequestInput> | RequestDetailsCreateWithoutRequestInput[] | RequestDetailsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDetailsCreateOrConnectWithoutRequestInput | RequestDetailsCreateOrConnectWithoutRequestInput[]
    upsert?: RequestDetailsUpsertWithWhereUniqueWithoutRequestInput | RequestDetailsUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestDetailsCreateManyRequestInputEnvelope
    set?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    disconnect?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    delete?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    connect?: RequestDetailsWhereUniqueInput | RequestDetailsWhereUniqueInput[]
    update?: RequestDetailsUpdateWithWhereUniqueWithoutRequestInput | RequestDetailsUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestDetailsUpdateManyWithWhereWithoutRequestInput | RequestDetailsUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestDetailsScalarWhereInput | RequestDetailsScalarWhereInput[]
  }

  export type RequestCreateNestedOneWithoutRequestDetailsInput = {
    create?: XOR<RequestCreateWithoutRequestDetailsInput, RequestUncheckedCreateWithoutRequestDetailsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutRequestDetailsInput
    connect?: RequestWhereUniqueInput
  }

  export type RequestUpdateOneRequiredWithoutRequestDetailsNestedInput = {
    create?: XOR<RequestCreateWithoutRequestDetailsInput, RequestUncheckedCreateWithoutRequestDetailsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutRequestDetailsInput
    upsert?: RequestUpsertWithoutRequestDetailsInput
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutRequestDetailsInput, RequestUpdateWithoutRequestDetailsInput>, RequestUncheckedUpdateWithoutRequestDetailsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RequestDetailsCreateWithoutRequestInput = {
    id?: string
    jumlah: number
    barangId: string
  }

  export type RequestDetailsUncheckedCreateWithoutRequestInput = {
    id?: string
    jumlah: number
    barangId: string
  }

  export type RequestDetailsCreateOrConnectWithoutRequestInput = {
    where: RequestDetailsWhereUniqueInput
    create: XOR<RequestDetailsCreateWithoutRequestInput, RequestDetailsUncheckedCreateWithoutRequestInput>
  }

  export type RequestDetailsCreateManyRequestInputEnvelope = {
    data: RequestDetailsCreateManyRequestInput | RequestDetailsCreateManyRequestInput[]
  }

  export type RequestDetailsUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestDetailsWhereUniqueInput
    update: XOR<RequestDetailsUpdateWithoutRequestInput, RequestDetailsUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestDetailsCreateWithoutRequestInput, RequestDetailsUncheckedCreateWithoutRequestInput>
  }

  export type RequestDetailsUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestDetailsWhereUniqueInput
    data: XOR<RequestDetailsUpdateWithoutRequestInput, RequestDetailsUncheckedUpdateWithoutRequestInput>
  }

  export type RequestDetailsUpdateManyWithWhereWithoutRequestInput = {
    where: RequestDetailsScalarWhereInput
    data: XOR<RequestDetailsUpdateManyMutationInput, RequestDetailsUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestDetailsScalarWhereInput = {
    AND?: RequestDetailsScalarWhereInput | RequestDetailsScalarWhereInput[]
    OR?: RequestDetailsScalarWhereInput[]
    NOT?: RequestDetailsScalarWhereInput | RequestDetailsScalarWhereInput[]
    id?: StringFilter<"RequestDetails"> | string
    jumlah?: IntFilter<"RequestDetails"> | number
    barangId?: StringFilter<"RequestDetails"> | string
    requestId?: StringFilter<"RequestDetails"> | string
  }

  export type RequestCreateWithoutRequestDetailsInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    status: number
  }

  export type RequestUncheckedCreateWithoutRequestDetailsInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    status: number
  }

  export type RequestCreateOrConnectWithoutRequestDetailsInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutRequestDetailsInput, RequestUncheckedCreateWithoutRequestDetailsInput>
  }

  export type RequestUpsertWithoutRequestDetailsInput = {
    update: XOR<RequestUpdateWithoutRequestDetailsInput, RequestUncheckedUpdateWithoutRequestDetailsInput>
    create: XOR<RequestCreateWithoutRequestDetailsInput, RequestUncheckedCreateWithoutRequestDetailsInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutRequestDetailsInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutRequestDetailsInput, RequestUncheckedUpdateWithoutRequestDetailsInput>
  }

  export type RequestUpdateWithoutRequestDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateWithoutRequestDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
  }

  export type RequestDetailsCreateManyRequestInput = {
    id?: string
    jumlah: number
    barangId: string
  }

  export type RequestDetailsUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestDetailsUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestDetailsUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RequestCountOutputTypeDefaultArgs instead
     */
    export type RequestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequestDefaultArgs instead
     */
    export type RequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequestDetailsDefaultArgs instead
     */
    export type RequestDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequestDetailsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}