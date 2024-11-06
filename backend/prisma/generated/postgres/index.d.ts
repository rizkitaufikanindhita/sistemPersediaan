
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Barang
 * 
 */
export type Barang = $Result.DefaultSelection<Prisma.$BarangPayload>
/**
 * Model InputBarang
 * 
 */
export type InputBarang = $Result.DefaultSelection<Prisma.$InputBarangPayload>
/**
 * Model InputBarangDetail
 * 
 */
export type InputBarangDetail = $Result.DefaultSelection<Prisma.$InputBarangDetailPayload>
/**
 * Model OutputBarang
 * 
 */
export type OutputBarang = $Result.DefaultSelection<Prisma.$OutputBarangPayload>
/**
 * Model OutputBarangDetail
 * 
 */
export type OutputBarangDetail = $Result.DefaultSelection<Prisma.$OutputBarangDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.barang`: Exposes CRUD operations for the **Barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.BarangDelegate<ExtArgs>;

  /**
   * `prisma.inputBarang`: Exposes CRUD operations for the **InputBarang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InputBarangs
    * const inputBarangs = await prisma.inputBarang.findMany()
    * ```
    */
  get inputBarang(): Prisma.InputBarangDelegate<ExtArgs>;

  /**
   * `prisma.inputBarangDetail`: Exposes CRUD operations for the **InputBarangDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InputBarangDetails
    * const inputBarangDetails = await prisma.inputBarangDetail.findMany()
    * ```
    */
  get inputBarangDetail(): Prisma.InputBarangDetailDelegate<ExtArgs>;

  /**
   * `prisma.outputBarang`: Exposes CRUD operations for the **OutputBarang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutputBarangs
    * const outputBarangs = await prisma.outputBarang.findMany()
    * ```
    */
  get outputBarang(): Prisma.OutputBarangDelegate<ExtArgs>;

  /**
   * `prisma.outputBarangDetail`: Exposes CRUD operations for the **OutputBarangDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutputBarangDetails
    * const outputBarangDetails = await prisma.outputBarangDetail.findMany()
    * ```
    */
  get outputBarangDetail(): Prisma.OutputBarangDetailDelegate<ExtArgs>;
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
    User: 'User',
    Barang: 'Barang',
    InputBarang: 'InputBarang',
    InputBarangDetail: 'InputBarangDetail',
    OutputBarang: 'OutputBarang',
    OutputBarangDetail: 'OutputBarangDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    dbPostgres?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'barang' | 'inputBarang' | 'inputBarangDetail' | 'outputBarang' | 'outputBarangDetail'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Barang: {
        payload: Prisma.$BarangPayload<ExtArgs>
        fields: Prisma.BarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findFirst: {
            args: Prisma.BarangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findMany: {
            args: Prisma.BarangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          create: {
            args: Prisma.BarangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          createMany: {
            args: Prisma.BarangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BarangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          update: {
            args: Prisma.BarangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          deleteMany: {
            args: Prisma.BarangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BarangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BarangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.BarangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangCountArgs<ExtArgs>,
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      InputBarang: {
        payload: Prisma.$InputBarangPayload<ExtArgs>
        fields: Prisma.InputBarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InputBarangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InputBarangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload>
          }
          findFirst: {
            args: Prisma.InputBarangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InputBarangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload>
          }
          findMany: {
            args: Prisma.InputBarangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload>[]
          }
          create: {
            args: Prisma.InputBarangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload>
          }
          createMany: {
            args: Prisma.InputBarangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InputBarangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload>
          }
          update: {
            args: Prisma.InputBarangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload>
          }
          deleteMany: {
            args: Prisma.InputBarangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InputBarangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InputBarangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangPayload>
          }
          aggregate: {
            args: Prisma.InputBarangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInputBarang>
          }
          groupBy: {
            args: Prisma.InputBarangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InputBarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.InputBarangCountArgs<ExtArgs>,
            result: $Utils.Optional<InputBarangCountAggregateOutputType> | number
          }
        }
      }
      InputBarangDetail: {
        payload: Prisma.$InputBarangDetailPayload<ExtArgs>
        fields: Prisma.InputBarangDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InputBarangDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InputBarangDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload>
          }
          findFirst: {
            args: Prisma.InputBarangDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InputBarangDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload>
          }
          findMany: {
            args: Prisma.InputBarangDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload>[]
          }
          create: {
            args: Prisma.InputBarangDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload>
          }
          createMany: {
            args: Prisma.InputBarangDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InputBarangDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload>
          }
          update: {
            args: Prisma.InputBarangDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload>
          }
          deleteMany: {
            args: Prisma.InputBarangDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InputBarangDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InputBarangDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputBarangDetailPayload>
          }
          aggregate: {
            args: Prisma.InputBarangDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInputBarangDetail>
          }
          groupBy: {
            args: Prisma.InputBarangDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InputBarangDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.InputBarangDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<InputBarangDetailCountAggregateOutputType> | number
          }
        }
      }
      OutputBarang: {
        payload: Prisma.$OutputBarangPayload<ExtArgs>
        fields: Prisma.OutputBarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutputBarangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutputBarangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload>
          }
          findFirst: {
            args: Prisma.OutputBarangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutputBarangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload>
          }
          findMany: {
            args: Prisma.OutputBarangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload>[]
          }
          create: {
            args: Prisma.OutputBarangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload>
          }
          createMany: {
            args: Prisma.OutputBarangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OutputBarangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload>
          }
          update: {
            args: Prisma.OutputBarangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload>
          }
          deleteMany: {
            args: Prisma.OutputBarangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OutputBarangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OutputBarangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangPayload>
          }
          aggregate: {
            args: Prisma.OutputBarangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOutputBarang>
          }
          groupBy: {
            args: Prisma.OutputBarangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OutputBarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutputBarangCountArgs<ExtArgs>,
            result: $Utils.Optional<OutputBarangCountAggregateOutputType> | number
          }
        }
      }
      OutputBarangDetail: {
        payload: Prisma.$OutputBarangDetailPayload<ExtArgs>
        fields: Prisma.OutputBarangDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutputBarangDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutputBarangDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload>
          }
          findFirst: {
            args: Prisma.OutputBarangDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutputBarangDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload>
          }
          findMany: {
            args: Prisma.OutputBarangDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload>[]
          }
          create: {
            args: Prisma.OutputBarangDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload>
          }
          createMany: {
            args: Prisma.OutputBarangDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OutputBarangDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload>
          }
          update: {
            args: Prisma.OutputBarangDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload>
          }
          deleteMany: {
            args: Prisma.OutputBarangDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OutputBarangDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OutputBarangDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OutputBarangDetailPayload>
          }
          aggregate: {
            args: Prisma.OutputBarangDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOutputBarangDetail>
          }
          groupBy: {
            args: Prisma.OutputBarangDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OutputBarangDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutputBarangDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<OutputBarangDetailCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    inputBarangs: number
    outputBarangs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputBarangs?: boolean | UserCountOutputTypeCountInputBarangsArgs
    outputBarangs?: boolean | UserCountOutputTypeCountOutputBarangsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInputBarangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputBarangWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOutputBarangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputBarangWhereInput
  }



  /**
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    inputBarangDetails: number
    outputBarangDetails: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputBarangDetails?: boolean | BarangCountOutputTypeCountInputBarangDetailsArgs
    outputBarangDetails?: boolean | BarangCountOutputTypeCountOutputBarangDetailsArgs
  }

  // Custom InputTypes

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountInputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputBarangDetailWhereInput
  }


  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountOutputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputBarangDetailWhereInput
  }



  /**
   * Count Type InputBarangCountOutputType
   */

  export type InputBarangCountOutputType = {
    inputBarangDetails: number
  }

  export type InputBarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputBarangDetails?: boolean | InputBarangCountOutputTypeCountInputBarangDetailsArgs
  }

  // Custom InputTypes

  /**
   * InputBarangCountOutputType without action
   */
  export type InputBarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangCountOutputType
     */
    select?: InputBarangCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * InputBarangCountOutputType without action
   */
  export type InputBarangCountOutputTypeCountInputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputBarangDetailWhereInput
  }



  /**
   * Count Type OutputBarangCountOutputType
   */

  export type OutputBarangCountOutputType = {
    outputBarangDetails: number
  }

  export type OutputBarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outputBarangDetails?: boolean | OutputBarangCountOutputTypeCountOutputBarangDetailsArgs
  }

  // Custom InputTypes

  /**
   * OutputBarangCountOutputType without action
   */
  export type OutputBarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangCountOutputType
     */
    select?: OutputBarangCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OutputBarangCountOutputType without action
   */
  export type OutputBarangCountOutputTypeCountOutputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputBarangDetailWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    nip: string | null
    bagian: string | null
    isAdmin: boolean | null
    password: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nip: string | null
    bagian: string | null
    isAdmin: boolean | null
    password: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    nip: number
    bagian: number
    isAdmin: number
    password: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    nip?: true
    bagian?: true
    isAdmin?: true
    password?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    nip?: true
    bagian?: true
    isAdmin?: true
    password?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    nip?: true
    bagian?: true
    isAdmin?: true
    password?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    nip: string
    bagian: string
    isAdmin: boolean
    password: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nip?: boolean
    bagian?: boolean
    isAdmin?: boolean
    password?: boolean
    email?: boolean
    inputBarangs?: boolean | User$inputBarangsArgs<ExtArgs>
    outputBarangs?: boolean | User$outputBarangsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    nip?: boolean
    bagian?: boolean
    isAdmin?: boolean
    password?: boolean
    email?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputBarangs?: boolean | User$inputBarangsArgs<ExtArgs>
    outputBarangs?: boolean | User$outputBarangsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      inputBarangs: Prisma.$InputBarangPayload<ExtArgs>[]
      outputBarangs: Prisma.$OutputBarangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nip: string
      bagian: string
      isAdmin: boolean
      password: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inputBarangs<T extends User$inputBarangsArgs<ExtArgs> = {}>(args?: Subset<T, User$inputBarangsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'findMany'> | Null>;

    outputBarangs<T extends User$outputBarangsArgs<ExtArgs> = {}>(args?: Subset<T, User$outputBarangsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly nip: FieldRef<"User", 'String'>
    readonly bagian: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.inputBarangs
   */
  export type User$inputBarangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    where?: InputBarangWhereInput
    orderBy?: InputBarangOrderByWithRelationInput | InputBarangOrderByWithRelationInput[]
    cursor?: InputBarangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InputBarangScalarFieldEnum | InputBarangScalarFieldEnum[]
  }


  /**
   * User.outputBarangs
   */
  export type User$outputBarangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    where?: OutputBarangWhereInput
    orderBy?: OutputBarangOrderByWithRelationInput | OutputBarangOrderByWithRelationInput[]
    cursor?: OutputBarangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputBarangScalarFieldEnum | OutputBarangScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangAvgAggregateOutputType = {
    stokBarang: number | null
  }

  export type BarangSumAggregateOutputType = {
    stokBarang: number | null
  }

  export type BarangMinAggregateOutputType = {
    id: string | null
    namaBarang: string | null
    satuanBarang: string | null
    stokBarang: number | null
    gambarUrl: string | null
    kategori: string | null
  }

  export type BarangMaxAggregateOutputType = {
    id: string | null
    namaBarang: string | null
    satuanBarang: string | null
    stokBarang: number | null
    gambarUrl: string | null
    kategori: string | null
  }

  export type BarangCountAggregateOutputType = {
    id: number
    namaBarang: number
    satuanBarang: number
    stokBarang: number
    gambarUrl: number
    kategori: number
    _all: number
  }


  export type BarangAvgAggregateInputType = {
    stokBarang?: true
  }

  export type BarangSumAggregateInputType = {
    stokBarang?: true
  }

  export type BarangMinAggregateInputType = {
    id?: true
    namaBarang?: true
    satuanBarang?: true
    stokBarang?: true
    gambarUrl?: true
    kategori?: true
  }

  export type BarangMaxAggregateInputType = {
    id?: true
    namaBarang?: true
    satuanBarang?: true
    stokBarang?: true
    gambarUrl?: true
    kategori?: true
  }

  export type BarangCountAggregateInputType = {
    id?: true
    namaBarang?: true
    satuanBarang?: true
    stokBarang?: true
    gambarUrl?: true
    kategori?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barang to aggregate.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type BarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangWhereInput
    orderBy?: BarangOrderByWithAggregationInput | BarangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: BarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _avg?: BarangAvgAggregateInputType
    _sum?: BarangSumAggregateInputType
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    id: string
    namaBarang: string
    satuanBarang: string
    stokBarang: number | null
    gambarUrl: string | null
    kategori: string | null
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends BarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type BarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaBarang?: boolean
    satuanBarang?: boolean
    stokBarang?: boolean
    gambarUrl?: boolean
    kategori?: boolean
    inputBarangDetails?: boolean | Barang$inputBarangDetailsArgs<ExtArgs>
    outputBarangDetails?: boolean | Barang$outputBarangDetailsArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectScalar = {
    id?: boolean
    namaBarang?: boolean
    satuanBarang?: boolean
    stokBarang?: boolean
    gambarUrl?: boolean
    kategori?: boolean
  }

  export type BarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputBarangDetails?: boolean | Barang$inputBarangDetailsArgs<ExtArgs>
    outputBarangDetails?: boolean | Barang$outputBarangDetailsArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barang"
    objects: {
      inputBarangDetails: Prisma.$InputBarangDetailPayload<ExtArgs>[]
      outputBarangDetails: Prisma.$OutputBarangDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaBarang: string
      satuanBarang: string
      stokBarang: number | null
      gambarUrl: string | null
      kategori: string | null
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }


  type BarangGetPayload<S extends boolean | null | undefined | BarangDefaultArgs> = $Result.GetResult<Prisma.$BarangPayload, S>

  type BarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface BarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barang'], meta: { name: 'Barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {BarangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BarangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BarangFindUniqueArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Barang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BarangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BarangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BarangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindFirstArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BarangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barangWithIdOnly = await prisma.barang.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BarangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Barang.
     * @param {BarangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
    **/
    create<T extends BarangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangCreateArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Barangs.
     *     @param {BarangCreateManyArgs} args - Arguments to create many Barangs.
     *     @example
     *     // Create many Barangs
     *     const barang = await prisma.barang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BarangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Barang.
     * @param {BarangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
    **/
    delete<T extends BarangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BarangDeleteArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Barang.
     * @param {BarangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BarangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangUpdateArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Barangs.
     * @param {BarangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BarangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BarangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BarangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Barang.
     * @param {BarangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
    **/
    upsert<T extends BarangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BarangUpsertArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends BarangCountArgs>(
      args?: Subset<T, BarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangGroupByArgs} args - Group by arguments.
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
      T extends BarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangGroupByArgs['orderBy'] }
        : { orderBy?: BarangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barang model
   */
  readonly fields: BarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inputBarangDetails<T extends Barang$inputBarangDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Barang$inputBarangDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    outputBarangDetails<T extends Barang$outputBarangDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Barang$outputBarangDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Barang model
   */ 
  interface BarangFieldRefs {
    readonly id: FieldRef<"Barang", 'String'>
    readonly namaBarang: FieldRef<"Barang", 'String'>
    readonly satuanBarang: FieldRef<"Barang", 'String'>
    readonly stokBarang: FieldRef<"Barang", 'Int'>
    readonly gambarUrl: FieldRef<"Barang", 'String'>
    readonly kategori: FieldRef<"Barang", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Barang findUnique
   */
  export type BarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang findUniqueOrThrow
   */
  export type BarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang findFirst
   */
  export type BarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }


  /**
   * Barang findFirstOrThrow
   */
  export type BarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }


  /**
   * Barang findMany
   */
  export type BarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barangs to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }


  /**
   * Barang create
   */
  export type BarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to create a Barang.
     */
    data: XOR<BarangCreateInput, BarangUncheckedCreateInput>
  }


  /**
   * Barang createMany
   */
  export type BarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Barang update
   */
  export type BarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to update a Barang.
     */
    data: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
    /**
     * Choose, which Barang to update.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang updateMany
   */
  export type BarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
  }


  /**
   * Barang upsert
   */
  export type BarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The filter to search for the Barang to update in case it exists.
     */
    where: BarangWhereUniqueInput
    /**
     * In case the Barang found by the `where` argument doesn't exist, create a new Barang with this data.
     */
    create: XOR<BarangCreateInput, BarangUncheckedCreateInput>
    /**
     * In case the Barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
  }


  /**
   * Barang delete
   */
  export type BarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter which Barang to delete.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang deleteMany
   */
  export type BarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barangs to delete
     */
    where?: BarangWhereInput
  }


  /**
   * Barang.inputBarangDetails
   */
  export type Barang$inputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    where?: InputBarangDetailWhereInput
    orderBy?: InputBarangDetailOrderByWithRelationInput | InputBarangDetailOrderByWithRelationInput[]
    cursor?: InputBarangDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InputBarangDetailScalarFieldEnum | InputBarangDetailScalarFieldEnum[]
  }


  /**
   * Barang.outputBarangDetails
   */
  export type Barang$outputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    where?: OutputBarangDetailWhereInput
    orderBy?: OutputBarangDetailOrderByWithRelationInput | OutputBarangDetailOrderByWithRelationInput[]
    cursor?: OutputBarangDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputBarangDetailScalarFieldEnum | OutputBarangDetailScalarFieldEnum[]
  }


  /**
   * Barang without action
   */
  export type BarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
  }



  /**
   * Model InputBarang
   */

  export type AggregateInputBarang = {
    _count: InputBarangCountAggregateOutputType | null
    _min: InputBarangMinAggregateOutputType | null
    _max: InputBarangMaxAggregateOutputType | null
  }

  export type InputBarangMinAggregateOutputType = {
    id: string | null
    tanggal: string | null
    namaPengadaan: string | null
    userId: string | null
  }

  export type InputBarangMaxAggregateOutputType = {
    id: string | null
    tanggal: string | null
    namaPengadaan: string | null
    userId: string | null
  }

  export type InputBarangCountAggregateOutputType = {
    id: number
    tanggal: number
    namaPengadaan: number
    userId: number
    _all: number
  }


  export type InputBarangMinAggregateInputType = {
    id?: true
    tanggal?: true
    namaPengadaan?: true
    userId?: true
  }

  export type InputBarangMaxAggregateInputType = {
    id?: true
    tanggal?: true
    namaPengadaan?: true
    userId?: true
  }

  export type InputBarangCountAggregateInputType = {
    id?: true
    tanggal?: true
    namaPengadaan?: true
    userId?: true
    _all?: true
  }

  export type InputBarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputBarang to aggregate.
     */
    where?: InputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangs to fetch.
     */
    orderBy?: InputBarangOrderByWithRelationInput | InputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InputBarangs
    **/
    _count?: true | InputBarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InputBarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InputBarangMaxAggregateInputType
  }

  export type GetInputBarangAggregateType<T extends InputBarangAggregateArgs> = {
        [P in keyof T & keyof AggregateInputBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInputBarang[P]>
      : GetScalarType<T[P], AggregateInputBarang[P]>
  }




  export type InputBarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputBarangWhereInput
    orderBy?: InputBarangOrderByWithAggregationInput | InputBarangOrderByWithAggregationInput[]
    by: InputBarangScalarFieldEnum[] | InputBarangScalarFieldEnum
    having?: InputBarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InputBarangCountAggregateInputType | true
    _min?: InputBarangMinAggregateInputType
    _max?: InputBarangMaxAggregateInputType
  }

  export type InputBarangGroupByOutputType = {
    id: string
    tanggal: string
    namaPengadaan: string
    userId: string
    _count: InputBarangCountAggregateOutputType | null
    _min: InputBarangMinAggregateOutputType | null
    _max: InputBarangMaxAggregateOutputType | null
  }

  type GetInputBarangGroupByPayload<T extends InputBarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InputBarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InputBarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InputBarangGroupByOutputType[P]>
            : GetScalarType<T[P], InputBarangGroupByOutputType[P]>
        }
      >
    >


  export type InputBarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    namaPengadaan?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    inputBarangDetails?: boolean | InputBarang$inputBarangDetailsArgs<ExtArgs>
    _count?: boolean | InputBarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inputBarang"]>

  export type InputBarangSelectScalar = {
    id?: boolean
    tanggal?: boolean
    namaPengadaan?: boolean
    userId?: boolean
  }

  export type InputBarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    inputBarangDetails?: boolean | InputBarang$inputBarangDetailsArgs<ExtArgs>
    _count?: boolean | InputBarangCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $InputBarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InputBarang"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      inputBarangDetails: Prisma.$InputBarangDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: string
      namaPengadaan: string
      userId: string
    }, ExtArgs["result"]["inputBarang"]>
    composites: {}
  }


  type InputBarangGetPayload<S extends boolean | null | undefined | InputBarangDefaultArgs> = $Result.GetResult<Prisma.$InputBarangPayload, S>

  type InputBarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InputBarangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InputBarangCountAggregateInputType | true
    }

  export interface InputBarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InputBarang'], meta: { name: 'InputBarang' } }
    /**
     * Find zero or one InputBarang that matches the filter.
     * @param {InputBarangFindUniqueArgs} args - Arguments to find a InputBarang
     * @example
     * // Get one InputBarang
     * const inputBarang = await prisma.inputBarang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InputBarangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangFindUniqueArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InputBarang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InputBarangFindUniqueOrThrowArgs} args - Arguments to find a InputBarang
     * @example
     * // Get one InputBarang
     * const inputBarang = await prisma.inputBarang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InputBarangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InputBarang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangFindFirstArgs} args - Arguments to find a InputBarang
     * @example
     * // Get one InputBarang
     * const inputBarang = await prisma.inputBarang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InputBarangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangFindFirstArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InputBarang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangFindFirstOrThrowArgs} args - Arguments to find a InputBarang
     * @example
     * // Get one InputBarang
     * const inputBarang = await prisma.inputBarang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InputBarangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InputBarangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InputBarangs
     * const inputBarangs = await prisma.inputBarang.findMany()
     * 
     * // Get first 10 InputBarangs
     * const inputBarangs = await prisma.inputBarang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inputBarangWithIdOnly = await prisma.inputBarang.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InputBarangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InputBarang.
     * @param {InputBarangCreateArgs} args - Arguments to create a InputBarang.
     * @example
     * // Create one InputBarang
     * const InputBarang = await prisma.inputBarang.create({
     *   data: {
     *     // ... data to create a InputBarang
     *   }
     * })
     * 
    **/
    create<T extends InputBarangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangCreateArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InputBarangs.
     *     @param {InputBarangCreateManyArgs} args - Arguments to create many InputBarangs.
     *     @example
     *     // Create many InputBarangs
     *     const inputBarang = await prisma.inputBarang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InputBarangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InputBarang.
     * @param {InputBarangDeleteArgs} args - Arguments to delete one InputBarang.
     * @example
     * // Delete one InputBarang
     * const InputBarang = await prisma.inputBarang.delete({
     *   where: {
     *     // ... filter to delete one InputBarang
     *   }
     * })
     * 
    **/
    delete<T extends InputBarangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangDeleteArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InputBarang.
     * @param {InputBarangUpdateArgs} args - Arguments to update one InputBarang.
     * @example
     * // Update one InputBarang
     * const inputBarang = await prisma.inputBarang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InputBarangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangUpdateArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InputBarangs.
     * @param {InputBarangDeleteManyArgs} args - Arguments to filter InputBarangs to delete.
     * @example
     * // Delete a few InputBarangs
     * const { count } = await prisma.inputBarang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InputBarangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InputBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InputBarangs
     * const inputBarang = await prisma.inputBarang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InputBarangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InputBarang.
     * @param {InputBarangUpsertArgs} args - Arguments to update or create a InputBarang.
     * @example
     * // Update or create a InputBarang
     * const inputBarang = await prisma.inputBarang.upsert({
     *   create: {
     *     // ... data to create a InputBarang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InputBarang we want to update
     *   }
     * })
    **/
    upsert<T extends InputBarangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangUpsertArgs<ExtArgs>>
    ): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InputBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangCountArgs} args - Arguments to filter InputBarangs to count.
     * @example
     * // Count the number of InputBarangs
     * const count = await prisma.inputBarang.count({
     *   where: {
     *     // ... the filter for the InputBarangs we want to count
     *   }
     * })
    **/
    count<T extends InputBarangCountArgs>(
      args?: Subset<T, InputBarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InputBarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InputBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InputBarangAggregateArgs>(args: Subset<T, InputBarangAggregateArgs>): Prisma.PrismaPromise<GetInputBarangAggregateType<T>>

    /**
     * Group by InputBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangGroupByArgs} args - Group by arguments.
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
      T extends InputBarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InputBarangGroupByArgs['orderBy'] }
        : { orderBy?: InputBarangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InputBarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInputBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InputBarang model
   */
  readonly fields: InputBarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InputBarang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InputBarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    inputBarangDetails<T extends InputBarang$inputBarangDetailsArgs<ExtArgs> = {}>(args?: Subset<T, InputBarang$inputBarangDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the InputBarang model
   */ 
  interface InputBarangFieldRefs {
    readonly id: FieldRef<"InputBarang", 'String'>
    readonly tanggal: FieldRef<"InputBarang", 'String'>
    readonly namaPengadaan: FieldRef<"InputBarang", 'String'>
    readonly userId: FieldRef<"InputBarang", 'String'>
  }
    

  // Custom InputTypes

  /**
   * InputBarang findUnique
   */
  export type InputBarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * Filter, which InputBarang to fetch.
     */
    where: InputBarangWhereUniqueInput
  }


  /**
   * InputBarang findUniqueOrThrow
   */
  export type InputBarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * Filter, which InputBarang to fetch.
     */
    where: InputBarangWhereUniqueInput
  }


  /**
   * InputBarang findFirst
   */
  export type InputBarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * Filter, which InputBarang to fetch.
     */
    where?: InputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangs to fetch.
     */
    orderBy?: InputBarangOrderByWithRelationInput | InputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputBarangs.
     */
    cursor?: InputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputBarangs.
     */
    distinct?: InputBarangScalarFieldEnum | InputBarangScalarFieldEnum[]
  }


  /**
   * InputBarang findFirstOrThrow
   */
  export type InputBarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * Filter, which InputBarang to fetch.
     */
    where?: InputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangs to fetch.
     */
    orderBy?: InputBarangOrderByWithRelationInput | InputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputBarangs.
     */
    cursor?: InputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputBarangs.
     */
    distinct?: InputBarangScalarFieldEnum | InputBarangScalarFieldEnum[]
  }


  /**
   * InputBarang findMany
   */
  export type InputBarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * Filter, which InputBarangs to fetch.
     */
    where?: InputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangs to fetch.
     */
    orderBy?: InputBarangOrderByWithRelationInput | InputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InputBarangs.
     */
    cursor?: InputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangs.
     */
    skip?: number
    distinct?: InputBarangScalarFieldEnum | InputBarangScalarFieldEnum[]
  }


  /**
   * InputBarang create
   */
  export type InputBarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * The data needed to create a InputBarang.
     */
    data: XOR<InputBarangCreateInput, InputBarangUncheckedCreateInput>
  }


  /**
   * InputBarang createMany
   */
  export type InputBarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InputBarangs.
     */
    data: InputBarangCreateManyInput | InputBarangCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InputBarang update
   */
  export type InputBarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * The data needed to update a InputBarang.
     */
    data: XOR<InputBarangUpdateInput, InputBarangUncheckedUpdateInput>
    /**
     * Choose, which InputBarang to update.
     */
    where: InputBarangWhereUniqueInput
  }


  /**
   * InputBarang updateMany
   */
  export type InputBarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InputBarangs.
     */
    data: XOR<InputBarangUpdateManyMutationInput, InputBarangUncheckedUpdateManyInput>
    /**
     * Filter which InputBarangs to update
     */
    where?: InputBarangWhereInput
  }


  /**
   * InputBarang upsert
   */
  export type InputBarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * The filter to search for the InputBarang to update in case it exists.
     */
    where: InputBarangWhereUniqueInput
    /**
     * In case the InputBarang found by the `where` argument doesn't exist, create a new InputBarang with this data.
     */
    create: XOR<InputBarangCreateInput, InputBarangUncheckedCreateInput>
    /**
     * In case the InputBarang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InputBarangUpdateInput, InputBarangUncheckedUpdateInput>
  }


  /**
   * InputBarang delete
   */
  export type InputBarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
    /**
     * Filter which InputBarang to delete.
     */
    where: InputBarangWhereUniqueInput
  }


  /**
   * InputBarang deleteMany
   */
  export type InputBarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputBarangs to delete
     */
    where?: InputBarangWhereInput
  }


  /**
   * InputBarang.inputBarangDetails
   */
  export type InputBarang$inputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    where?: InputBarangDetailWhereInput
    orderBy?: InputBarangDetailOrderByWithRelationInput | InputBarangDetailOrderByWithRelationInput[]
    cursor?: InputBarangDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InputBarangDetailScalarFieldEnum | InputBarangDetailScalarFieldEnum[]
  }


  /**
   * InputBarang without action
   */
  export type InputBarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarang
     */
    select?: InputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangInclude<ExtArgs> | null
  }



  /**
   * Model InputBarangDetail
   */

  export type AggregateInputBarangDetail = {
    _count: InputBarangDetailCountAggregateOutputType | null
    _avg: InputBarangDetailAvgAggregateOutputType | null
    _sum: InputBarangDetailSumAggregateOutputType | null
    _min: InputBarangDetailMinAggregateOutputType | null
    _max: InputBarangDetailMaxAggregateOutputType | null
  }

  export type InputBarangDetailAvgAggregateOutputType = {
    jumlah: number | null
  }

  export type InputBarangDetailSumAggregateOutputType = {
    jumlah: number | null
  }

  export type InputBarangDetailMinAggregateOutputType = {
    id: string | null
    jumlah: number | null
    barangId: string | null
    inputBarangId: string | null
  }

  export type InputBarangDetailMaxAggregateOutputType = {
    id: string | null
    jumlah: number | null
    barangId: string | null
    inputBarangId: string | null
  }

  export type InputBarangDetailCountAggregateOutputType = {
    id: number
    jumlah: number
    barangId: number
    inputBarangId: number
    _all: number
  }


  export type InputBarangDetailAvgAggregateInputType = {
    jumlah?: true
  }

  export type InputBarangDetailSumAggregateInputType = {
    jumlah?: true
  }

  export type InputBarangDetailMinAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    inputBarangId?: true
  }

  export type InputBarangDetailMaxAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    inputBarangId?: true
  }

  export type InputBarangDetailCountAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    inputBarangId?: true
    _all?: true
  }

  export type InputBarangDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputBarangDetail to aggregate.
     */
    where?: InputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangDetails to fetch.
     */
    orderBy?: InputBarangDetailOrderByWithRelationInput | InputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InputBarangDetails
    **/
    _count?: true | InputBarangDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InputBarangDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InputBarangDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InputBarangDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InputBarangDetailMaxAggregateInputType
  }

  export type GetInputBarangDetailAggregateType<T extends InputBarangDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateInputBarangDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInputBarangDetail[P]>
      : GetScalarType<T[P], AggregateInputBarangDetail[P]>
  }




  export type InputBarangDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputBarangDetailWhereInput
    orderBy?: InputBarangDetailOrderByWithAggregationInput | InputBarangDetailOrderByWithAggregationInput[]
    by: InputBarangDetailScalarFieldEnum[] | InputBarangDetailScalarFieldEnum
    having?: InputBarangDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InputBarangDetailCountAggregateInputType | true
    _avg?: InputBarangDetailAvgAggregateInputType
    _sum?: InputBarangDetailSumAggregateInputType
    _min?: InputBarangDetailMinAggregateInputType
    _max?: InputBarangDetailMaxAggregateInputType
  }

  export type InputBarangDetailGroupByOutputType = {
    id: string
    jumlah: number
    barangId: string
    inputBarangId: string
    _count: InputBarangDetailCountAggregateOutputType | null
    _avg: InputBarangDetailAvgAggregateOutputType | null
    _sum: InputBarangDetailSumAggregateOutputType | null
    _min: InputBarangDetailMinAggregateOutputType | null
    _max: InputBarangDetailMaxAggregateOutputType | null
  }

  type GetInputBarangDetailGroupByPayload<T extends InputBarangDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InputBarangDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InputBarangDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InputBarangDetailGroupByOutputType[P]>
            : GetScalarType<T[P], InputBarangDetailGroupByOutputType[P]>
        }
      >
    >


  export type InputBarangDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    barangId?: boolean
    inputBarangId?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
    inputBarang?: boolean | InputBarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inputBarangDetail"]>

  export type InputBarangDetailSelectScalar = {
    id?: boolean
    jumlah?: boolean
    barangId?: boolean
    inputBarangId?: boolean
  }

  export type InputBarangDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
    inputBarang?: boolean | InputBarangDefaultArgs<ExtArgs>
  }


  export type $InputBarangDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InputBarangDetail"
    objects: {
      barang: Prisma.$BarangPayload<ExtArgs>
      inputBarang: Prisma.$InputBarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jumlah: number
      barangId: string
      inputBarangId: string
    }, ExtArgs["result"]["inputBarangDetail"]>
    composites: {}
  }


  type InputBarangDetailGetPayload<S extends boolean | null | undefined | InputBarangDetailDefaultArgs> = $Result.GetResult<Prisma.$InputBarangDetailPayload, S>

  type InputBarangDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InputBarangDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InputBarangDetailCountAggregateInputType | true
    }

  export interface InputBarangDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InputBarangDetail'], meta: { name: 'InputBarangDetail' } }
    /**
     * Find zero or one InputBarangDetail that matches the filter.
     * @param {InputBarangDetailFindUniqueArgs} args - Arguments to find a InputBarangDetail
     * @example
     * // Get one InputBarangDetail
     * const inputBarangDetail = await prisma.inputBarangDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InputBarangDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InputBarangDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InputBarangDetailFindUniqueOrThrowArgs} args - Arguments to find a InputBarangDetail
     * @example
     * // Get one InputBarangDetail
     * const inputBarangDetail = await prisma.inputBarangDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InputBarangDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InputBarangDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangDetailFindFirstArgs} args - Arguments to find a InputBarangDetail
     * @example
     * // Get one InputBarangDetail
     * const inputBarangDetail = await prisma.inputBarangDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InputBarangDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangDetailFindFirstArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InputBarangDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangDetailFindFirstOrThrowArgs} args - Arguments to find a InputBarangDetail
     * @example
     * // Get one InputBarangDetail
     * const inputBarangDetail = await prisma.inputBarangDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InputBarangDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InputBarangDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InputBarangDetails
     * const inputBarangDetails = await prisma.inputBarangDetail.findMany()
     * 
     * // Get first 10 InputBarangDetails
     * const inputBarangDetails = await prisma.inputBarangDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inputBarangDetailWithIdOnly = await prisma.inputBarangDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InputBarangDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InputBarangDetail.
     * @param {InputBarangDetailCreateArgs} args - Arguments to create a InputBarangDetail.
     * @example
     * // Create one InputBarangDetail
     * const InputBarangDetail = await prisma.inputBarangDetail.create({
     *   data: {
     *     // ... data to create a InputBarangDetail
     *   }
     * })
     * 
    **/
    create<T extends InputBarangDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangDetailCreateArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InputBarangDetails.
     *     @param {InputBarangDetailCreateManyArgs} args - Arguments to create many InputBarangDetails.
     *     @example
     *     // Create many InputBarangDetails
     *     const inputBarangDetail = await prisma.inputBarangDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InputBarangDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InputBarangDetail.
     * @param {InputBarangDetailDeleteArgs} args - Arguments to delete one InputBarangDetail.
     * @example
     * // Delete one InputBarangDetail
     * const InputBarangDetail = await prisma.inputBarangDetail.delete({
     *   where: {
     *     // ... filter to delete one InputBarangDetail
     *   }
     * })
     * 
    **/
    delete<T extends InputBarangDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangDetailDeleteArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InputBarangDetail.
     * @param {InputBarangDetailUpdateArgs} args - Arguments to update one InputBarangDetail.
     * @example
     * // Update one InputBarangDetail
     * const inputBarangDetail = await prisma.inputBarangDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InputBarangDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangDetailUpdateArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InputBarangDetails.
     * @param {InputBarangDetailDeleteManyArgs} args - Arguments to filter InputBarangDetails to delete.
     * @example
     * // Delete a few InputBarangDetails
     * const { count } = await prisma.inputBarangDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InputBarangDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputBarangDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InputBarangDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InputBarangDetails
     * const inputBarangDetail = await prisma.inputBarangDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InputBarangDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InputBarangDetail.
     * @param {InputBarangDetailUpsertArgs} args - Arguments to update or create a InputBarangDetail.
     * @example
     * // Update or create a InputBarangDetail
     * const inputBarangDetail = await prisma.inputBarangDetail.upsert({
     *   create: {
     *     // ... data to create a InputBarangDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InputBarangDetail we want to update
     *   }
     * })
    **/
    upsert<T extends InputBarangDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InputBarangDetailUpsertArgs<ExtArgs>>
    ): Prisma__InputBarangDetailClient<$Result.GetResult<Prisma.$InputBarangDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InputBarangDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangDetailCountArgs} args - Arguments to filter InputBarangDetails to count.
     * @example
     * // Count the number of InputBarangDetails
     * const count = await prisma.inputBarangDetail.count({
     *   where: {
     *     // ... the filter for the InputBarangDetails we want to count
     *   }
     * })
    **/
    count<T extends InputBarangDetailCountArgs>(
      args?: Subset<T, InputBarangDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InputBarangDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InputBarangDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InputBarangDetailAggregateArgs>(args: Subset<T, InputBarangDetailAggregateArgs>): Prisma.PrismaPromise<GetInputBarangDetailAggregateType<T>>

    /**
     * Group by InputBarangDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputBarangDetailGroupByArgs} args - Group by arguments.
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
      T extends InputBarangDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InputBarangDetailGroupByArgs['orderBy'] }
        : { orderBy?: InputBarangDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InputBarangDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInputBarangDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InputBarangDetail model
   */
  readonly fields: InputBarangDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InputBarangDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InputBarangDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    inputBarang<T extends InputBarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InputBarangDefaultArgs<ExtArgs>>): Prisma__InputBarangClient<$Result.GetResult<Prisma.$InputBarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the InputBarangDetail model
   */ 
  interface InputBarangDetailFieldRefs {
    readonly id: FieldRef<"InputBarangDetail", 'String'>
    readonly jumlah: FieldRef<"InputBarangDetail", 'Int'>
    readonly barangId: FieldRef<"InputBarangDetail", 'String'>
    readonly inputBarangId: FieldRef<"InputBarangDetail", 'String'>
  }
    

  // Custom InputTypes

  /**
   * InputBarangDetail findUnique
   */
  export type InputBarangDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which InputBarangDetail to fetch.
     */
    where: InputBarangDetailWhereUniqueInput
  }


  /**
   * InputBarangDetail findUniqueOrThrow
   */
  export type InputBarangDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which InputBarangDetail to fetch.
     */
    where: InputBarangDetailWhereUniqueInput
  }


  /**
   * InputBarangDetail findFirst
   */
  export type InputBarangDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which InputBarangDetail to fetch.
     */
    where?: InputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangDetails to fetch.
     */
    orderBy?: InputBarangDetailOrderByWithRelationInput | InputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputBarangDetails.
     */
    cursor?: InputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputBarangDetails.
     */
    distinct?: InputBarangDetailScalarFieldEnum | InputBarangDetailScalarFieldEnum[]
  }


  /**
   * InputBarangDetail findFirstOrThrow
   */
  export type InputBarangDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which InputBarangDetail to fetch.
     */
    where?: InputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangDetails to fetch.
     */
    orderBy?: InputBarangDetailOrderByWithRelationInput | InputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputBarangDetails.
     */
    cursor?: InputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputBarangDetails.
     */
    distinct?: InputBarangDetailScalarFieldEnum | InputBarangDetailScalarFieldEnum[]
  }


  /**
   * InputBarangDetail findMany
   */
  export type InputBarangDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which InputBarangDetails to fetch.
     */
    where?: InputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputBarangDetails to fetch.
     */
    orderBy?: InputBarangDetailOrderByWithRelationInput | InputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InputBarangDetails.
     */
    cursor?: InputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputBarangDetails.
     */
    skip?: number
    distinct?: InputBarangDetailScalarFieldEnum | InputBarangDetailScalarFieldEnum[]
  }


  /**
   * InputBarangDetail create
   */
  export type InputBarangDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a InputBarangDetail.
     */
    data: XOR<InputBarangDetailCreateInput, InputBarangDetailUncheckedCreateInput>
  }


  /**
   * InputBarangDetail createMany
   */
  export type InputBarangDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InputBarangDetails.
     */
    data: InputBarangDetailCreateManyInput | InputBarangDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InputBarangDetail update
   */
  export type InputBarangDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a InputBarangDetail.
     */
    data: XOR<InputBarangDetailUpdateInput, InputBarangDetailUncheckedUpdateInput>
    /**
     * Choose, which InputBarangDetail to update.
     */
    where: InputBarangDetailWhereUniqueInput
  }


  /**
   * InputBarangDetail updateMany
   */
  export type InputBarangDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InputBarangDetails.
     */
    data: XOR<InputBarangDetailUpdateManyMutationInput, InputBarangDetailUncheckedUpdateManyInput>
    /**
     * Filter which InputBarangDetails to update
     */
    where?: InputBarangDetailWhereInput
  }


  /**
   * InputBarangDetail upsert
   */
  export type InputBarangDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the InputBarangDetail to update in case it exists.
     */
    where: InputBarangDetailWhereUniqueInput
    /**
     * In case the InputBarangDetail found by the `where` argument doesn't exist, create a new InputBarangDetail with this data.
     */
    create: XOR<InputBarangDetailCreateInput, InputBarangDetailUncheckedCreateInput>
    /**
     * In case the InputBarangDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InputBarangDetailUpdateInput, InputBarangDetailUncheckedUpdateInput>
  }


  /**
   * InputBarangDetail delete
   */
  export type InputBarangDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter which InputBarangDetail to delete.
     */
    where: InputBarangDetailWhereUniqueInput
  }


  /**
   * InputBarangDetail deleteMany
   */
  export type InputBarangDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputBarangDetails to delete
     */
    where?: InputBarangDetailWhereInput
  }


  /**
   * InputBarangDetail without action
   */
  export type InputBarangDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputBarangDetail
     */
    select?: InputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InputBarangDetailInclude<ExtArgs> | null
  }



  /**
   * Model OutputBarang
   */

  export type AggregateOutputBarang = {
    _count: OutputBarangCountAggregateOutputType | null
    _min: OutputBarangMinAggregateOutputType | null
    _max: OutputBarangMaxAggregateOutputType | null
  }

  export type OutputBarangMinAggregateOutputType = {
    id: string | null
    tanggal: string | null
    userId: string | null
    bagian: string | null
    requestId: string | null
  }

  export type OutputBarangMaxAggregateOutputType = {
    id: string | null
    tanggal: string | null
    userId: string | null
    bagian: string | null
    requestId: string | null
  }

  export type OutputBarangCountAggregateOutputType = {
    id: number
    tanggal: number
    userId: number
    bagian: number
    requestId: number
    _all: number
  }


  export type OutputBarangMinAggregateInputType = {
    id?: true
    tanggal?: true
    userId?: true
    bagian?: true
    requestId?: true
  }

  export type OutputBarangMaxAggregateInputType = {
    id?: true
    tanggal?: true
    userId?: true
    bagian?: true
    requestId?: true
  }

  export type OutputBarangCountAggregateInputType = {
    id?: true
    tanggal?: true
    userId?: true
    bagian?: true
    requestId?: true
    _all?: true
  }

  export type OutputBarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputBarang to aggregate.
     */
    where?: OutputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangs to fetch.
     */
    orderBy?: OutputBarangOrderByWithRelationInput | OutputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutputBarangs
    **/
    _count?: true | OutputBarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputBarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputBarangMaxAggregateInputType
  }

  export type GetOutputBarangAggregateType<T extends OutputBarangAggregateArgs> = {
        [P in keyof T & keyof AggregateOutputBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutputBarang[P]>
      : GetScalarType<T[P], AggregateOutputBarang[P]>
  }




  export type OutputBarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputBarangWhereInput
    orderBy?: OutputBarangOrderByWithAggregationInput | OutputBarangOrderByWithAggregationInput[]
    by: OutputBarangScalarFieldEnum[] | OutputBarangScalarFieldEnum
    having?: OutputBarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputBarangCountAggregateInputType | true
    _min?: OutputBarangMinAggregateInputType
    _max?: OutputBarangMaxAggregateInputType
  }

  export type OutputBarangGroupByOutputType = {
    id: string
    tanggal: string
    userId: string
    bagian: string
    requestId: string
    _count: OutputBarangCountAggregateOutputType | null
    _min: OutputBarangMinAggregateOutputType | null
    _max: OutputBarangMaxAggregateOutputType | null
  }

  type GetOutputBarangGroupByPayload<T extends OutputBarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutputBarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputBarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputBarangGroupByOutputType[P]>
            : GetScalarType<T[P], OutputBarangGroupByOutputType[P]>
        }
      >
    >


  export type OutputBarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    userId?: boolean
    bagian?: boolean
    requestId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outputBarangDetails?: boolean | OutputBarang$outputBarangDetailsArgs<ExtArgs>
    _count?: boolean | OutputBarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputBarang"]>

  export type OutputBarangSelectScalar = {
    id?: boolean
    tanggal?: boolean
    userId?: boolean
    bagian?: boolean
    requestId?: boolean
  }

  export type OutputBarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outputBarangDetails?: boolean | OutputBarang$outputBarangDetailsArgs<ExtArgs>
    _count?: boolean | OutputBarangCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OutputBarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutputBarang"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      outputBarangDetails: Prisma.$OutputBarangDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: string
      userId: string
      bagian: string
      requestId: string
    }, ExtArgs["result"]["outputBarang"]>
    composites: {}
  }


  type OutputBarangGetPayload<S extends boolean | null | undefined | OutputBarangDefaultArgs> = $Result.GetResult<Prisma.$OutputBarangPayload, S>

  type OutputBarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutputBarangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutputBarangCountAggregateInputType | true
    }

  export interface OutputBarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutputBarang'], meta: { name: 'OutputBarang' } }
    /**
     * Find zero or one OutputBarang that matches the filter.
     * @param {OutputBarangFindUniqueArgs} args - Arguments to find a OutputBarang
     * @example
     * // Get one OutputBarang
     * const outputBarang = await prisma.outputBarang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OutputBarangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangFindUniqueArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OutputBarang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OutputBarangFindUniqueOrThrowArgs} args - Arguments to find a OutputBarang
     * @example
     * // Get one OutputBarang
     * const outputBarang = await prisma.outputBarang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OutputBarangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OutputBarang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangFindFirstArgs} args - Arguments to find a OutputBarang
     * @example
     * // Get one OutputBarang
     * const outputBarang = await prisma.outputBarang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OutputBarangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangFindFirstArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OutputBarang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangFindFirstOrThrowArgs} args - Arguments to find a OutputBarang
     * @example
     * // Get one OutputBarang
     * const outputBarang = await prisma.outputBarang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OutputBarangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OutputBarangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutputBarangs
     * const outputBarangs = await prisma.outputBarang.findMany()
     * 
     * // Get first 10 OutputBarangs
     * const outputBarangs = await prisma.outputBarang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputBarangWithIdOnly = await prisma.outputBarang.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OutputBarangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OutputBarang.
     * @param {OutputBarangCreateArgs} args - Arguments to create a OutputBarang.
     * @example
     * // Create one OutputBarang
     * const OutputBarang = await prisma.outputBarang.create({
     *   data: {
     *     // ... data to create a OutputBarang
     *   }
     * })
     * 
    **/
    create<T extends OutputBarangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangCreateArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OutputBarangs.
     *     @param {OutputBarangCreateManyArgs} args - Arguments to create many OutputBarangs.
     *     @example
     *     // Create many OutputBarangs
     *     const outputBarang = await prisma.outputBarang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OutputBarangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OutputBarang.
     * @param {OutputBarangDeleteArgs} args - Arguments to delete one OutputBarang.
     * @example
     * // Delete one OutputBarang
     * const OutputBarang = await prisma.outputBarang.delete({
     *   where: {
     *     // ... filter to delete one OutputBarang
     *   }
     * })
     * 
    **/
    delete<T extends OutputBarangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangDeleteArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OutputBarang.
     * @param {OutputBarangUpdateArgs} args - Arguments to update one OutputBarang.
     * @example
     * // Update one OutputBarang
     * const outputBarang = await prisma.outputBarang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OutputBarangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangUpdateArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OutputBarangs.
     * @param {OutputBarangDeleteManyArgs} args - Arguments to filter OutputBarangs to delete.
     * @example
     * // Delete a few OutputBarangs
     * const { count } = await prisma.outputBarang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OutputBarangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutputBarangs
     * const outputBarang = await prisma.outputBarang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OutputBarangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutputBarang.
     * @param {OutputBarangUpsertArgs} args - Arguments to update or create a OutputBarang.
     * @example
     * // Update or create a OutputBarang
     * const outputBarang = await prisma.outputBarang.upsert({
     *   create: {
     *     // ... data to create a OutputBarang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutputBarang we want to update
     *   }
     * })
    **/
    upsert<T extends OutputBarangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangUpsertArgs<ExtArgs>>
    ): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OutputBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangCountArgs} args - Arguments to filter OutputBarangs to count.
     * @example
     * // Count the number of OutputBarangs
     * const count = await prisma.outputBarang.count({
     *   where: {
     *     // ... the filter for the OutputBarangs we want to count
     *   }
     * })
    **/
    count<T extends OutputBarangCountArgs>(
      args?: Subset<T, OutputBarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputBarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutputBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutputBarangAggregateArgs>(args: Subset<T, OutputBarangAggregateArgs>): Prisma.PrismaPromise<GetOutputBarangAggregateType<T>>

    /**
     * Group by OutputBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangGroupByArgs} args - Group by arguments.
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
      T extends OutputBarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutputBarangGroupByArgs['orderBy'] }
        : { orderBy?: OutputBarangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutputBarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutputBarang model
   */
  readonly fields: OutputBarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutputBarang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutputBarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    outputBarangDetails<T extends OutputBarang$outputBarangDetailsArgs<ExtArgs> = {}>(args?: Subset<T, OutputBarang$outputBarangDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the OutputBarang model
   */ 
  interface OutputBarangFieldRefs {
    readonly id: FieldRef<"OutputBarang", 'String'>
    readonly tanggal: FieldRef<"OutputBarang", 'String'>
    readonly userId: FieldRef<"OutputBarang", 'String'>
    readonly bagian: FieldRef<"OutputBarang", 'String'>
    readonly requestId: FieldRef<"OutputBarang", 'String'>
  }
    

  // Custom InputTypes

  /**
   * OutputBarang findUnique
   */
  export type OutputBarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarang to fetch.
     */
    where: OutputBarangWhereUniqueInput
  }


  /**
   * OutputBarang findUniqueOrThrow
   */
  export type OutputBarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarang to fetch.
     */
    where: OutputBarangWhereUniqueInput
  }


  /**
   * OutputBarang findFirst
   */
  export type OutputBarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarang to fetch.
     */
    where?: OutputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangs to fetch.
     */
    orderBy?: OutputBarangOrderByWithRelationInput | OutputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputBarangs.
     */
    cursor?: OutputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputBarangs.
     */
    distinct?: OutputBarangScalarFieldEnum | OutputBarangScalarFieldEnum[]
  }


  /**
   * OutputBarang findFirstOrThrow
   */
  export type OutputBarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarang to fetch.
     */
    where?: OutputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangs to fetch.
     */
    orderBy?: OutputBarangOrderByWithRelationInput | OutputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputBarangs.
     */
    cursor?: OutputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputBarangs.
     */
    distinct?: OutputBarangScalarFieldEnum | OutputBarangScalarFieldEnum[]
  }


  /**
   * OutputBarang findMany
   */
  export type OutputBarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarangs to fetch.
     */
    where?: OutputBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangs to fetch.
     */
    orderBy?: OutputBarangOrderByWithRelationInput | OutputBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutputBarangs.
     */
    cursor?: OutputBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangs.
     */
    skip?: number
    distinct?: OutputBarangScalarFieldEnum | OutputBarangScalarFieldEnum[]
  }


  /**
   * OutputBarang create
   */
  export type OutputBarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * The data needed to create a OutputBarang.
     */
    data: XOR<OutputBarangCreateInput, OutputBarangUncheckedCreateInput>
  }


  /**
   * OutputBarang createMany
   */
  export type OutputBarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutputBarangs.
     */
    data: OutputBarangCreateManyInput | OutputBarangCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OutputBarang update
   */
  export type OutputBarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * The data needed to update a OutputBarang.
     */
    data: XOR<OutputBarangUpdateInput, OutputBarangUncheckedUpdateInput>
    /**
     * Choose, which OutputBarang to update.
     */
    where: OutputBarangWhereUniqueInput
  }


  /**
   * OutputBarang updateMany
   */
  export type OutputBarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutputBarangs.
     */
    data: XOR<OutputBarangUpdateManyMutationInput, OutputBarangUncheckedUpdateManyInput>
    /**
     * Filter which OutputBarangs to update
     */
    where?: OutputBarangWhereInput
  }


  /**
   * OutputBarang upsert
   */
  export type OutputBarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * The filter to search for the OutputBarang to update in case it exists.
     */
    where: OutputBarangWhereUniqueInput
    /**
     * In case the OutputBarang found by the `where` argument doesn't exist, create a new OutputBarang with this data.
     */
    create: XOR<OutputBarangCreateInput, OutputBarangUncheckedCreateInput>
    /**
     * In case the OutputBarang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutputBarangUpdateInput, OutputBarangUncheckedUpdateInput>
  }


  /**
   * OutputBarang delete
   */
  export type OutputBarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
    /**
     * Filter which OutputBarang to delete.
     */
    where: OutputBarangWhereUniqueInput
  }


  /**
   * OutputBarang deleteMany
   */
  export type OutputBarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputBarangs to delete
     */
    where?: OutputBarangWhereInput
  }


  /**
   * OutputBarang.outputBarangDetails
   */
  export type OutputBarang$outputBarangDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    where?: OutputBarangDetailWhereInput
    orderBy?: OutputBarangDetailOrderByWithRelationInput | OutputBarangDetailOrderByWithRelationInput[]
    cursor?: OutputBarangDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputBarangDetailScalarFieldEnum | OutputBarangDetailScalarFieldEnum[]
  }


  /**
   * OutputBarang without action
   */
  export type OutputBarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarang
     */
    select?: OutputBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangInclude<ExtArgs> | null
  }



  /**
   * Model OutputBarangDetail
   */

  export type AggregateOutputBarangDetail = {
    _count: OutputBarangDetailCountAggregateOutputType | null
    _avg: OutputBarangDetailAvgAggregateOutputType | null
    _sum: OutputBarangDetailSumAggregateOutputType | null
    _min: OutputBarangDetailMinAggregateOutputType | null
    _max: OutputBarangDetailMaxAggregateOutputType | null
  }

  export type OutputBarangDetailAvgAggregateOutputType = {
    jumlah: number | null
  }

  export type OutputBarangDetailSumAggregateOutputType = {
    jumlah: number | null
  }

  export type OutputBarangDetailMinAggregateOutputType = {
    id: string | null
    jumlah: number | null
    barangId: string | null
    requestId: string | null
    outputBarangId: string | null
  }

  export type OutputBarangDetailMaxAggregateOutputType = {
    id: string | null
    jumlah: number | null
    barangId: string | null
    requestId: string | null
    outputBarangId: string | null
  }

  export type OutputBarangDetailCountAggregateOutputType = {
    id: number
    jumlah: number
    barangId: number
    requestId: number
    outputBarangId: number
    _all: number
  }


  export type OutputBarangDetailAvgAggregateInputType = {
    jumlah?: true
  }

  export type OutputBarangDetailSumAggregateInputType = {
    jumlah?: true
  }

  export type OutputBarangDetailMinAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    requestId?: true
    outputBarangId?: true
  }

  export type OutputBarangDetailMaxAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    requestId?: true
    outputBarangId?: true
  }

  export type OutputBarangDetailCountAggregateInputType = {
    id?: true
    jumlah?: true
    barangId?: true
    requestId?: true
    outputBarangId?: true
    _all?: true
  }

  export type OutputBarangDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputBarangDetail to aggregate.
     */
    where?: OutputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangDetails to fetch.
     */
    orderBy?: OutputBarangDetailOrderByWithRelationInput | OutputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutputBarangDetails
    **/
    _count?: true | OutputBarangDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutputBarangDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutputBarangDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputBarangDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputBarangDetailMaxAggregateInputType
  }

  export type GetOutputBarangDetailAggregateType<T extends OutputBarangDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOutputBarangDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutputBarangDetail[P]>
      : GetScalarType<T[P], AggregateOutputBarangDetail[P]>
  }




  export type OutputBarangDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutputBarangDetailWhereInput
    orderBy?: OutputBarangDetailOrderByWithAggregationInput | OutputBarangDetailOrderByWithAggregationInput[]
    by: OutputBarangDetailScalarFieldEnum[] | OutputBarangDetailScalarFieldEnum
    having?: OutputBarangDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputBarangDetailCountAggregateInputType | true
    _avg?: OutputBarangDetailAvgAggregateInputType
    _sum?: OutputBarangDetailSumAggregateInputType
    _min?: OutputBarangDetailMinAggregateInputType
    _max?: OutputBarangDetailMaxAggregateInputType
  }

  export type OutputBarangDetailGroupByOutputType = {
    id: string
    jumlah: number
    barangId: string
    requestId: string
    outputBarangId: string
    _count: OutputBarangDetailCountAggregateOutputType | null
    _avg: OutputBarangDetailAvgAggregateOutputType | null
    _sum: OutputBarangDetailSumAggregateOutputType | null
    _min: OutputBarangDetailMinAggregateOutputType | null
    _max: OutputBarangDetailMaxAggregateOutputType | null
  }

  type GetOutputBarangDetailGroupByPayload<T extends OutputBarangDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutputBarangDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputBarangDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputBarangDetailGroupByOutputType[P]>
            : GetScalarType<T[P], OutputBarangDetailGroupByOutputType[P]>
        }
      >
    >


  export type OutputBarangDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    barangId?: boolean
    requestId?: boolean
    outputBarangId?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
    outputBarang?: boolean | OutputBarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputBarangDetail"]>

  export type OutputBarangDetailSelectScalar = {
    id?: boolean
    jumlah?: boolean
    barangId?: boolean
    requestId?: boolean
    outputBarangId?: boolean
  }

  export type OutputBarangDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
    outputBarang?: boolean | OutputBarangDefaultArgs<ExtArgs>
  }


  export type $OutputBarangDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutputBarangDetail"
    objects: {
      barang: Prisma.$BarangPayload<ExtArgs>
      outputBarang: Prisma.$OutputBarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jumlah: number
      barangId: string
      requestId: string
      outputBarangId: string
    }, ExtArgs["result"]["outputBarangDetail"]>
    composites: {}
  }


  type OutputBarangDetailGetPayload<S extends boolean | null | undefined | OutputBarangDetailDefaultArgs> = $Result.GetResult<Prisma.$OutputBarangDetailPayload, S>

  type OutputBarangDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutputBarangDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutputBarangDetailCountAggregateInputType | true
    }

  export interface OutputBarangDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutputBarangDetail'], meta: { name: 'OutputBarangDetail' } }
    /**
     * Find zero or one OutputBarangDetail that matches the filter.
     * @param {OutputBarangDetailFindUniqueArgs} args - Arguments to find a OutputBarangDetail
     * @example
     * // Get one OutputBarangDetail
     * const outputBarangDetail = await prisma.outputBarangDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OutputBarangDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OutputBarangDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OutputBarangDetailFindUniqueOrThrowArgs} args - Arguments to find a OutputBarangDetail
     * @example
     * // Get one OutputBarangDetail
     * const outputBarangDetail = await prisma.outputBarangDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OutputBarangDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OutputBarangDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangDetailFindFirstArgs} args - Arguments to find a OutputBarangDetail
     * @example
     * // Get one OutputBarangDetail
     * const outputBarangDetail = await prisma.outputBarangDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OutputBarangDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangDetailFindFirstArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OutputBarangDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangDetailFindFirstOrThrowArgs} args - Arguments to find a OutputBarangDetail
     * @example
     * // Get one OutputBarangDetail
     * const outputBarangDetail = await prisma.outputBarangDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OutputBarangDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OutputBarangDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutputBarangDetails
     * const outputBarangDetails = await prisma.outputBarangDetail.findMany()
     * 
     * // Get first 10 OutputBarangDetails
     * const outputBarangDetails = await prisma.outputBarangDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputBarangDetailWithIdOnly = await prisma.outputBarangDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OutputBarangDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OutputBarangDetail.
     * @param {OutputBarangDetailCreateArgs} args - Arguments to create a OutputBarangDetail.
     * @example
     * // Create one OutputBarangDetail
     * const OutputBarangDetail = await prisma.outputBarangDetail.create({
     *   data: {
     *     // ... data to create a OutputBarangDetail
     *   }
     * })
     * 
    **/
    create<T extends OutputBarangDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangDetailCreateArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OutputBarangDetails.
     *     @param {OutputBarangDetailCreateManyArgs} args - Arguments to create many OutputBarangDetails.
     *     @example
     *     // Create many OutputBarangDetails
     *     const outputBarangDetail = await prisma.outputBarangDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OutputBarangDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OutputBarangDetail.
     * @param {OutputBarangDetailDeleteArgs} args - Arguments to delete one OutputBarangDetail.
     * @example
     * // Delete one OutputBarangDetail
     * const OutputBarangDetail = await prisma.outputBarangDetail.delete({
     *   where: {
     *     // ... filter to delete one OutputBarangDetail
     *   }
     * })
     * 
    **/
    delete<T extends OutputBarangDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangDetailDeleteArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OutputBarangDetail.
     * @param {OutputBarangDetailUpdateArgs} args - Arguments to update one OutputBarangDetail.
     * @example
     * // Update one OutputBarangDetail
     * const outputBarangDetail = await prisma.outputBarangDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OutputBarangDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangDetailUpdateArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OutputBarangDetails.
     * @param {OutputBarangDetailDeleteManyArgs} args - Arguments to filter OutputBarangDetails to delete.
     * @example
     * // Delete a few OutputBarangDetails
     * const { count } = await prisma.outputBarangDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OutputBarangDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OutputBarangDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutputBarangDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutputBarangDetails
     * const outputBarangDetail = await prisma.outputBarangDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OutputBarangDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutputBarangDetail.
     * @param {OutputBarangDetailUpsertArgs} args - Arguments to update or create a OutputBarangDetail.
     * @example
     * // Update or create a OutputBarangDetail
     * const outputBarangDetail = await prisma.outputBarangDetail.upsert({
     *   create: {
     *     // ... data to create a OutputBarangDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutputBarangDetail we want to update
     *   }
     * })
    **/
    upsert<T extends OutputBarangDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OutputBarangDetailUpsertArgs<ExtArgs>>
    ): Prisma__OutputBarangDetailClient<$Result.GetResult<Prisma.$OutputBarangDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OutputBarangDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangDetailCountArgs} args - Arguments to filter OutputBarangDetails to count.
     * @example
     * // Count the number of OutputBarangDetails
     * const count = await prisma.outputBarangDetail.count({
     *   where: {
     *     // ... the filter for the OutputBarangDetails we want to count
     *   }
     * })
    **/
    count<T extends OutputBarangDetailCountArgs>(
      args?: Subset<T, OutputBarangDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputBarangDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutputBarangDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutputBarangDetailAggregateArgs>(args: Subset<T, OutputBarangDetailAggregateArgs>): Prisma.PrismaPromise<GetOutputBarangDetailAggregateType<T>>

    /**
     * Group by OutputBarangDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputBarangDetailGroupByArgs} args - Group by arguments.
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
      T extends OutputBarangDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutputBarangDetailGroupByArgs['orderBy'] }
        : { orderBy?: OutputBarangDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutputBarangDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputBarangDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutputBarangDetail model
   */
  readonly fields: OutputBarangDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutputBarangDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutputBarangDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    outputBarang<T extends OutputBarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutputBarangDefaultArgs<ExtArgs>>): Prisma__OutputBarangClient<$Result.GetResult<Prisma.$OutputBarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the OutputBarangDetail model
   */ 
  interface OutputBarangDetailFieldRefs {
    readonly id: FieldRef<"OutputBarangDetail", 'String'>
    readonly jumlah: FieldRef<"OutputBarangDetail", 'Int'>
    readonly barangId: FieldRef<"OutputBarangDetail", 'String'>
    readonly requestId: FieldRef<"OutputBarangDetail", 'String'>
    readonly outputBarangId: FieldRef<"OutputBarangDetail", 'String'>
  }
    

  // Custom InputTypes

  /**
   * OutputBarangDetail findUnique
   */
  export type OutputBarangDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarangDetail to fetch.
     */
    where: OutputBarangDetailWhereUniqueInput
  }


  /**
   * OutputBarangDetail findUniqueOrThrow
   */
  export type OutputBarangDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarangDetail to fetch.
     */
    where: OutputBarangDetailWhereUniqueInput
  }


  /**
   * OutputBarangDetail findFirst
   */
  export type OutputBarangDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarangDetail to fetch.
     */
    where?: OutputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangDetails to fetch.
     */
    orderBy?: OutputBarangDetailOrderByWithRelationInput | OutputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputBarangDetails.
     */
    cursor?: OutputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputBarangDetails.
     */
    distinct?: OutputBarangDetailScalarFieldEnum | OutputBarangDetailScalarFieldEnum[]
  }


  /**
   * OutputBarangDetail findFirstOrThrow
   */
  export type OutputBarangDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarangDetail to fetch.
     */
    where?: OutputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangDetails to fetch.
     */
    orderBy?: OutputBarangDetailOrderByWithRelationInput | OutputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutputBarangDetails.
     */
    cursor?: OutputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutputBarangDetails.
     */
    distinct?: OutputBarangDetailScalarFieldEnum | OutputBarangDetailScalarFieldEnum[]
  }


  /**
   * OutputBarangDetail findMany
   */
  export type OutputBarangDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter, which OutputBarangDetails to fetch.
     */
    where?: OutputBarangDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutputBarangDetails to fetch.
     */
    orderBy?: OutputBarangDetailOrderByWithRelationInput | OutputBarangDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutputBarangDetails.
     */
    cursor?: OutputBarangDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutputBarangDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutputBarangDetails.
     */
    skip?: number
    distinct?: OutputBarangDetailScalarFieldEnum | OutputBarangDetailScalarFieldEnum[]
  }


  /**
   * OutputBarangDetail create
   */
  export type OutputBarangDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a OutputBarangDetail.
     */
    data: XOR<OutputBarangDetailCreateInput, OutputBarangDetailUncheckedCreateInput>
  }


  /**
   * OutputBarangDetail createMany
   */
  export type OutputBarangDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutputBarangDetails.
     */
    data: OutputBarangDetailCreateManyInput | OutputBarangDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OutputBarangDetail update
   */
  export type OutputBarangDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a OutputBarangDetail.
     */
    data: XOR<OutputBarangDetailUpdateInput, OutputBarangDetailUncheckedUpdateInput>
    /**
     * Choose, which OutputBarangDetail to update.
     */
    where: OutputBarangDetailWhereUniqueInput
  }


  /**
   * OutputBarangDetail updateMany
   */
  export type OutputBarangDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutputBarangDetails.
     */
    data: XOR<OutputBarangDetailUpdateManyMutationInput, OutputBarangDetailUncheckedUpdateManyInput>
    /**
     * Filter which OutputBarangDetails to update
     */
    where?: OutputBarangDetailWhereInput
  }


  /**
   * OutputBarangDetail upsert
   */
  export type OutputBarangDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the OutputBarangDetail to update in case it exists.
     */
    where: OutputBarangDetailWhereUniqueInput
    /**
     * In case the OutputBarangDetail found by the `where` argument doesn't exist, create a new OutputBarangDetail with this data.
     */
    create: XOR<OutputBarangDetailCreateInput, OutputBarangDetailUncheckedCreateInput>
    /**
     * In case the OutputBarangDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutputBarangDetailUpdateInput, OutputBarangDetailUncheckedUpdateInput>
  }


  /**
   * OutputBarangDetail delete
   */
  export type OutputBarangDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
    /**
     * Filter which OutputBarangDetail to delete.
     */
    where: OutputBarangDetailWhereUniqueInput
  }


  /**
   * OutputBarangDetail deleteMany
   */
  export type OutputBarangDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutputBarangDetails to delete
     */
    where?: OutputBarangDetailWhereInput
  }


  /**
   * OutputBarangDetail without action
   */
  export type OutputBarangDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutputBarangDetail
     */
    select?: OutputBarangDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OutputBarangDetailInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nip: 'nip',
    bagian: 'bagian',
    isAdmin: 'isAdmin',
    password: 'password',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BarangScalarFieldEnum: {
    id: 'id',
    namaBarang: 'namaBarang',
    satuanBarang: 'satuanBarang',
    stokBarang: 'stokBarang',
    gambarUrl: 'gambarUrl',
    kategori: 'kategori'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const InputBarangScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    namaPengadaan: 'namaPengadaan',
    userId: 'userId'
  };

  export type InputBarangScalarFieldEnum = (typeof InputBarangScalarFieldEnum)[keyof typeof InputBarangScalarFieldEnum]


  export const InputBarangDetailScalarFieldEnum: {
    id: 'id',
    jumlah: 'jumlah',
    barangId: 'barangId',
    inputBarangId: 'inputBarangId'
  };

  export type InputBarangDetailScalarFieldEnum = (typeof InputBarangDetailScalarFieldEnum)[keyof typeof InputBarangDetailScalarFieldEnum]


  export const OutputBarangScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    userId: 'userId',
    bagian: 'bagian',
    requestId: 'requestId'
  };

  export type OutputBarangScalarFieldEnum = (typeof OutputBarangScalarFieldEnum)[keyof typeof OutputBarangScalarFieldEnum]


  export const OutputBarangDetailScalarFieldEnum: {
    id: 'id',
    jumlah: 'jumlah',
    barangId: 'barangId',
    requestId: 'requestId',
    outputBarangId: 'outputBarangId'
  };

  export type OutputBarangDetailScalarFieldEnum = (typeof OutputBarangDetailScalarFieldEnum)[keyof typeof OutputBarangDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nip?: StringFilter<"User"> | string
    bagian?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    inputBarangs?: InputBarangListRelationFilter
    outputBarangs?: OutputBarangListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    bagian?: SortOrder
    isAdmin?: SortOrder
    password?: SortOrder
    email?: SortOrder
    inputBarangs?: InputBarangOrderByRelationAggregateInput
    outputBarangs?: OutputBarangOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nip?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    bagian?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    inputBarangs?: InputBarangListRelationFilter
    outputBarangs?: OutputBarangListRelationFilter
  }, "id" | "nip" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    bagian?: SortOrder
    isAdmin?: SortOrder
    password?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    nip?: StringWithAggregatesFilter<"User"> | string
    bagian?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type BarangWhereInput = {
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    id?: StringFilter<"Barang"> | string
    namaBarang?: StringFilter<"Barang"> | string
    satuanBarang?: StringFilter<"Barang"> | string
    stokBarang?: IntNullableFilter<"Barang"> | number | null
    gambarUrl?: StringNullableFilter<"Barang"> | string | null
    kategori?: StringNullableFilter<"Barang"> | string | null
    inputBarangDetails?: InputBarangDetailListRelationFilter
    outputBarangDetails?: OutputBarangDetailListRelationFilter
  }

  export type BarangOrderByWithRelationInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    satuanBarang?: SortOrder
    stokBarang?: SortOrderInput | SortOrder
    gambarUrl?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    inputBarangDetails?: InputBarangDetailOrderByRelationAggregateInput
    outputBarangDetails?: OutputBarangDetailOrderByRelationAggregateInput
  }

  export type BarangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    namaBarang?: StringFilter<"Barang"> | string
    satuanBarang?: StringFilter<"Barang"> | string
    stokBarang?: IntNullableFilter<"Barang"> | number | null
    gambarUrl?: StringNullableFilter<"Barang"> | string | null
    kategori?: StringNullableFilter<"Barang"> | string | null
    inputBarangDetails?: InputBarangDetailListRelationFilter
    outputBarangDetails?: OutputBarangDetailListRelationFilter
  }, "id">

  export type BarangOrderByWithAggregationInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    satuanBarang?: SortOrder
    stokBarang?: SortOrderInput | SortOrder
    gambarUrl?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    _count?: BarangCountOrderByAggregateInput
    _avg?: BarangAvgOrderByAggregateInput
    _max?: BarangMaxOrderByAggregateInput
    _min?: BarangMinOrderByAggregateInput
    _sum?: BarangSumOrderByAggregateInput
  }

  export type BarangScalarWhereWithAggregatesInput = {
    AND?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    OR?: BarangScalarWhereWithAggregatesInput[]
    NOT?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Barang"> | string
    namaBarang?: StringWithAggregatesFilter<"Barang"> | string
    satuanBarang?: StringWithAggregatesFilter<"Barang"> | string
    stokBarang?: IntNullableWithAggregatesFilter<"Barang"> | number | null
    gambarUrl?: StringNullableWithAggregatesFilter<"Barang"> | string | null
    kategori?: StringNullableWithAggregatesFilter<"Barang"> | string | null
  }

  export type InputBarangWhereInput = {
    AND?: InputBarangWhereInput | InputBarangWhereInput[]
    OR?: InputBarangWhereInput[]
    NOT?: InputBarangWhereInput | InputBarangWhereInput[]
    id?: StringFilter<"InputBarang"> | string
    tanggal?: StringFilter<"InputBarang"> | string
    namaPengadaan?: StringFilter<"InputBarang"> | string
    userId?: StringFilter<"InputBarang"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    inputBarangDetails?: InputBarangDetailListRelationFilter
  }

  export type InputBarangOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    namaPengadaan?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    inputBarangDetails?: InputBarangDetailOrderByRelationAggregateInput
  }

  export type InputBarangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InputBarangWhereInput | InputBarangWhereInput[]
    OR?: InputBarangWhereInput[]
    NOT?: InputBarangWhereInput | InputBarangWhereInput[]
    tanggal?: StringFilter<"InputBarang"> | string
    namaPengadaan?: StringFilter<"InputBarang"> | string
    userId?: StringFilter<"InputBarang"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    inputBarangDetails?: InputBarangDetailListRelationFilter
  }, "id">

  export type InputBarangOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    namaPengadaan?: SortOrder
    userId?: SortOrder
    _count?: InputBarangCountOrderByAggregateInput
    _max?: InputBarangMaxOrderByAggregateInput
    _min?: InputBarangMinOrderByAggregateInput
  }

  export type InputBarangScalarWhereWithAggregatesInput = {
    AND?: InputBarangScalarWhereWithAggregatesInput | InputBarangScalarWhereWithAggregatesInput[]
    OR?: InputBarangScalarWhereWithAggregatesInput[]
    NOT?: InputBarangScalarWhereWithAggregatesInput | InputBarangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InputBarang"> | string
    tanggal?: StringWithAggregatesFilter<"InputBarang"> | string
    namaPengadaan?: StringWithAggregatesFilter<"InputBarang"> | string
    userId?: StringWithAggregatesFilter<"InputBarang"> | string
  }

  export type InputBarangDetailWhereInput = {
    AND?: InputBarangDetailWhereInput | InputBarangDetailWhereInput[]
    OR?: InputBarangDetailWhereInput[]
    NOT?: InputBarangDetailWhereInput | InputBarangDetailWhereInput[]
    id?: StringFilter<"InputBarangDetail"> | string
    jumlah?: IntFilter<"InputBarangDetail"> | number
    barangId?: StringFilter<"InputBarangDetail"> | string
    inputBarangId?: StringFilter<"InputBarangDetail"> | string
    barang?: XOR<BarangRelationFilter, BarangWhereInput>
    inputBarang?: XOR<InputBarangRelationFilter, InputBarangWhereInput>
  }

  export type InputBarangDetailOrderByWithRelationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    inputBarangId?: SortOrder
    barang?: BarangOrderByWithRelationInput
    inputBarang?: InputBarangOrderByWithRelationInput
  }

  export type InputBarangDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barangId_inputBarangId?: InputBarangDetailBarangIdInputBarangIdCompoundUniqueInput
    AND?: InputBarangDetailWhereInput | InputBarangDetailWhereInput[]
    OR?: InputBarangDetailWhereInput[]
    NOT?: InputBarangDetailWhereInput | InputBarangDetailWhereInput[]
    jumlah?: IntFilter<"InputBarangDetail"> | number
    barangId?: StringFilter<"InputBarangDetail"> | string
    inputBarangId?: StringFilter<"InputBarangDetail"> | string
    barang?: XOR<BarangRelationFilter, BarangWhereInput>
    inputBarang?: XOR<InputBarangRelationFilter, InputBarangWhereInput>
  }, "id" | "barangId_inputBarangId">

  export type InputBarangDetailOrderByWithAggregationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    inputBarangId?: SortOrder
    _count?: InputBarangDetailCountOrderByAggregateInput
    _avg?: InputBarangDetailAvgOrderByAggregateInput
    _max?: InputBarangDetailMaxOrderByAggregateInput
    _min?: InputBarangDetailMinOrderByAggregateInput
    _sum?: InputBarangDetailSumOrderByAggregateInput
  }

  export type InputBarangDetailScalarWhereWithAggregatesInput = {
    AND?: InputBarangDetailScalarWhereWithAggregatesInput | InputBarangDetailScalarWhereWithAggregatesInput[]
    OR?: InputBarangDetailScalarWhereWithAggregatesInput[]
    NOT?: InputBarangDetailScalarWhereWithAggregatesInput | InputBarangDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InputBarangDetail"> | string
    jumlah?: IntWithAggregatesFilter<"InputBarangDetail"> | number
    barangId?: StringWithAggregatesFilter<"InputBarangDetail"> | string
    inputBarangId?: StringWithAggregatesFilter<"InputBarangDetail"> | string
  }

  export type OutputBarangWhereInput = {
    AND?: OutputBarangWhereInput | OutputBarangWhereInput[]
    OR?: OutputBarangWhereInput[]
    NOT?: OutputBarangWhereInput | OutputBarangWhereInput[]
    id?: StringFilter<"OutputBarang"> | string
    tanggal?: StringFilter<"OutputBarang"> | string
    userId?: StringFilter<"OutputBarang"> | string
    bagian?: StringFilter<"OutputBarang"> | string
    requestId?: StringFilter<"OutputBarang"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    outputBarangDetails?: OutputBarangDetailListRelationFilter
  }

  export type OutputBarangOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    requestId?: SortOrder
    user?: UserOrderByWithRelationInput
    outputBarangDetails?: OutputBarangDetailOrderByRelationAggregateInput
  }

  export type OutputBarangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutputBarangWhereInput | OutputBarangWhereInput[]
    OR?: OutputBarangWhereInput[]
    NOT?: OutputBarangWhereInput | OutputBarangWhereInput[]
    tanggal?: StringFilter<"OutputBarang"> | string
    userId?: StringFilter<"OutputBarang"> | string
    bagian?: StringFilter<"OutputBarang"> | string
    requestId?: StringFilter<"OutputBarang"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    outputBarangDetails?: OutputBarangDetailListRelationFilter
  }, "id">

  export type OutputBarangOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    requestId?: SortOrder
    _count?: OutputBarangCountOrderByAggregateInput
    _max?: OutputBarangMaxOrderByAggregateInput
    _min?: OutputBarangMinOrderByAggregateInput
  }

  export type OutputBarangScalarWhereWithAggregatesInput = {
    AND?: OutputBarangScalarWhereWithAggregatesInput | OutputBarangScalarWhereWithAggregatesInput[]
    OR?: OutputBarangScalarWhereWithAggregatesInput[]
    NOT?: OutputBarangScalarWhereWithAggregatesInput | OutputBarangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutputBarang"> | string
    tanggal?: StringWithAggregatesFilter<"OutputBarang"> | string
    userId?: StringWithAggregatesFilter<"OutputBarang"> | string
    bagian?: StringWithAggregatesFilter<"OutputBarang"> | string
    requestId?: StringWithAggregatesFilter<"OutputBarang"> | string
  }

  export type OutputBarangDetailWhereInput = {
    AND?: OutputBarangDetailWhereInput | OutputBarangDetailWhereInput[]
    OR?: OutputBarangDetailWhereInput[]
    NOT?: OutputBarangDetailWhereInput | OutputBarangDetailWhereInput[]
    id?: StringFilter<"OutputBarangDetail"> | string
    jumlah?: IntFilter<"OutputBarangDetail"> | number
    barangId?: StringFilter<"OutputBarangDetail"> | string
    requestId?: StringFilter<"OutputBarangDetail"> | string
    outputBarangId?: StringFilter<"OutputBarangDetail"> | string
    barang?: XOR<BarangRelationFilter, BarangWhereInput>
    outputBarang?: XOR<OutputBarangRelationFilter, OutputBarangWhereInput>
  }

  export type OutputBarangDetailOrderByWithRelationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
    outputBarangId?: SortOrder
    barang?: BarangOrderByWithRelationInput
    outputBarang?: OutputBarangOrderByWithRelationInput
  }

  export type OutputBarangDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barangId_outputBarangId?: OutputBarangDetailBarangIdOutputBarangIdCompoundUniqueInput
    AND?: OutputBarangDetailWhereInput | OutputBarangDetailWhereInput[]
    OR?: OutputBarangDetailWhereInput[]
    NOT?: OutputBarangDetailWhereInput | OutputBarangDetailWhereInput[]
    jumlah?: IntFilter<"OutputBarangDetail"> | number
    barangId?: StringFilter<"OutputBarangDetail"> | string
    requestId?: StringFilter<"OutputBarangDetail"> | string
    outputBarangId?: StringFilter<"OutputBarangDetail"> | string
    barang?: XOR<BarangRelationFilter, BarangWhereInput>
    outputBarang?: XOR<OutputBarangRelationFilter, OutputBarangWhereInput>
  }, "id" | "barangId_outputBarangId">

  export type OutputBarangDetailOrderByWithAggregationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
    outputBarangId?: SortOrder
    _count?: OutputBarangDetailCountOrderByAggregateInput
    _avg?: OutputBarangDetailAvgOrderByAggregateInput
    _max?: OutputBarangDetailMaxOrderByAggregateInput
    _min?: OutputBarangDetailMinOrderByAggregateInput
    _sum?: OutputBarangDetailSumOrderByAggregateInput
  }

  export type OutputBarangDetailScalarWhereWithAggregatesInput = {
    AND?: OutputBarangDetailScalarWhereWithAggregatesInput | OutputBarangDetailScalarWhereWithAggregatesInput[]
    OR?: OutputBarangDetailScalarWhereWithAggregatesInput[]
    NOT?: OutputBarangDetailScalarWhereWithAggregatesInput | OutputBarangDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutputBarangDetail"> | string
    jumlah?: IntWithAggregatesFilter<"OutputBarangDetail"> | number
    barangId?: StringWithAggregatesFilter<"OutputBarangDetail"> | string
    requestId?: StringWithAggregatesFilter<"OutputBarangDetail"> | string
    outputBarangId?: StringWithAggregatesFilter<"OutputBarangDetail"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    nip: string
    bagian: string
    isAdmin?: boolean
    password: string
    email: string
    inputBarangs?: InputBarangCreateNestedManyWithoutUserInput
    outputBarangs?: OutputBarangCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    nip: string
    bagian: string
    isAdmin?: boolean
    password: string
    email: string
    inputBarangs?: InputBarangUncheckedCreateNestedManyWithoutUserInput
    outputBarangs?: OutputBarangUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inputBarangs?: InputBarangUpdateManyWithoutUserNestedInput
    outputBarangs?: OutputBarangUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inputBarangs?: InputBarangUncheckedUpdateManyWithoutUserNestedInput
    outputBarangs?: OutputBarangUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    nip: string
    bagian: string
    isAdmin?: boolean
    password: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type BarangCreateInput = {
    id?: string
    namaBarang: string
    satuanBarang: string
    stokBarang?: number | null
    gambarUrl?: string | null
    kategori?: string | null
    inputBarangDetails?: InputBarangDetailCreateNestedManyWithoutBarangInput
    outputBarangDetails?: OutputBarangDetailCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateInput = {
    id?: string
    namaBarang: string
    satuanBarang: string
    stokBarang?: number | null
    gambarUrl?: string | null
    kategori?: string | null
    inputBarangDetails?: InputBarangDetailUncheckedCreateNestedManyWithoutBarangInput
    outputBarangDetails?: OutputBarangDetailUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    inputBarangDetails?: InputBarangDetailUpdateManyWithoutBarangNestedInput
    outputBarangDetails?: OutputBarangDetailUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    inputBarangDetails?: InputBarangDetailUncheckedUpdateManyWithoutBarangNestedInput
    outputBarangDetails?: OutputBarangDetailUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangCreateManyInput = {
    id?: string
    namaBarang: string
    satuanBarang: string
    stokBarang?: number | null
    gambarUrl?: string | null
    kategori?: string | null
  }

  export type BarangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BarangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InputBarangCreateInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
    user: UserCreateNestedOneWithoutInputBarangsInput
    inputBarangDetails?: InputBarangDetailCreateNestedManyWithoutInputBarangInput
  }

  export type InputBarangUncheckedCreateInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
    userId: string
    inputBarangDetails?: InputBarangDetailUncheckedCreateNestedManyWithoutInputBarangInput
  }

  export type InputBarangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInputBarangsNestedInput
    inputBarangDetails?: InputBarangDetailUpdateManyWithoutInputBarangNestedInput
  }

  export type InputBarangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inputBarangDetails?: InputBarangDetailUncheckedUpdateManyWithoutInputBarangNestedInput
  }

  export type InputBarangCreateManyInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
    userId: string
  }

  export type InputBarangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangDetailCreateInput = {
    id?: string
    jumlah: number
    barang: BarangCreateNestedOneWithoutInputBarangDetailsInput
    inputBarang: InputBarangCreateNestedOneWithoutInputBarangDetailsInput
  }

  export type InputBarangDetailUncheckedCreateInput = {
    id?: string
    jumlah: number
    barangId: string
    inputBarangId: string
  }

  export type InputBarangDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barang?: BarangUpdateOneRequiredWithoutInputBarangDetailsNestedInput
    inputBarang?: InputBarangUpdateOneRequiredWithoutInputBarangDetailsNestedInput
  }

  export type InputBarangDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    inputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangDetailCreateManyInput = {
    id?: string
    jumlah: number
    barangId: string
    inputBarangId: string
  }

  export type InputBarangDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type InputBarangDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    inputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangCreateInput = {
    id?: string
    tanggal: string
    bagian: string
    requestId: string
    user: UserCreateNestedOneWithoutOutputBarangsInput
    outputBarangDetails?: OutputBarangDetailCreateNestedManyWithoutOutputBarangInput
  }

  export type OutputBarangUncheckedCreateInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    requestId: string
    outputBarangDetails?: OutputBarangDetailUncheckedCreateNestedManyWithoutOutputBarangInput
  }

  export type OutputBarangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOutputBarangsNestedInput
    outputBarangDetails?: OutputBarangDetailUpdateManyWithoutOutputBarangNestedInput
  }

  export type OutputBarangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarangDetails?: OutputBarangDetailUncheckedUpdateManyWithoutOutputBarangNestedInput
  }

  export type OutputBarangCreateManyInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    requestId: string
  }

  export type OutputBarangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangDetailCreateInput = {
    id?: string
    jumlah: number
    requestId: string
    barang: BarangCreateNestedOneWithoutOutputBarangDetailsInput
    outputBarang: OutputBarangCreateNestedOneWithoutOutputBarangDetailsInput
  }

  export type OutputBarangDetailUncheckedCreateInput = {
    id?: string
    jumlah: number
    barangId: string
    requestId: string
    outputBarangId: string
  }

  export type OutputBarangDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    barang?: BarangUpdateOneRequiredWithoutOutputBarangDetailsNestedInput
    outputBarang?: OutputBarangUpdateOneRequiredWithoutOutputBarangDetailsNestedInput
  }

  export type OutputBarangDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangDetailCreateManyInput = {
    id?: string
    jumlah: number
    barangId: string
    requestId: string
    outputBarangId: string
  }

  export type OutputBarangDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InputBarangListRelationFilter = {
    every?: InputBarangWhereInput
    some?: InputBarangWhereInput
    none?: InputBarangWhereInput
  }

  export type OutputBarangListRelationFilter = {
    every?: OutputBarangWhereInput
    some?: OutputBarangWhereInput
    none?: OutputBarangWhereInput
  }

  export type InputBarangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutputBarangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    bagian?: SortOrder
    isAdmin?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    bagian?: SortOrder
    isAdmin?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nip?: SortOrder
    bagian?: SortOrder
    isAdmin?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InputBarangDetailListRelationFilter = {
    every?: InputBarangDetailWhereInput
    some?: InputBarangDetailWhereInput
    none?: InputBarangDetailWhereInput
  }

  export type OutputBarangDetailListRelationFilter = {
    every?: OutputBarangDetailWhereInput
    some?: OutputBarangDetailWhereInput
    none?: OutputBarangDetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InputBarangDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutputBarangDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangCountOrderByAggregateInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    satuanBarang?: SortOrder
    stokBarang?: SortOrder
    gambarUrl?: SortOrder
    kategori?: SortOrder
  }

  export type BarangAvgOrderByAggregateInput = {
    stokBarang?: SortOrder
  }

  export type BarangMaxOrderByAggregateInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    satuanBarang?: SortOrder
    stokBarang?: SortOrder
    gambarUrl?: SortOrder
    kategori?: SortOrder
  }

  export type BarangMinOrderByAggregateInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    satuanBarang?: SortOrder
    stokBarang?: SortOrder
    gambarUrl?: SortOrder
    kategori?: SortOrder
  }

  export type BarangSumOrderByAggregateInput = {
    stokBarang?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InputBarangCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    namaPengadaan?: SortOrder
    userId?: SortOrder
  }

  export type InputBarangMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    namaPengadaan?: SortOrder
    userId?: SortOrder
  }

  export type InputBarangMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    namaPengadaan?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BarangRelationFilter = {
    is?: BarangWhereInput
    isNot?: BarangWhereInput
  }

  export type InputBarangRelationFilter = {
    is?: InputBarangWhereInput
    isNot?: InputBarangWhereInput
  }

  export type InputBarangDetailBarangIdInputBarangIdCompoundUniqueInput = {
    barangId: string
    inputBarangId: string
  }

  export type InputBarangDetailCountOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    inputBarangId?: SortOrder
  }

  export type InputBarangDetailAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type InputBarangDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    inputBarangId?: SortOrder
  }

  export type InputBarangDetailMinOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    inputBarangId?: SortOrder
  }

  export type InputBarangDetailSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type OutputBarangCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    requestId?: SortOrder
  }

  export type OutputBarangMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    requestId?: SortOrder
  }

  export type OutputBarangMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    userId?: SortOrder
    bagian?: SortOrder
    requestId?: SortOrder
  }

  export type OutputBarangRelationFilter = {
    is?: OutputBarangWhereInput
    isNot?: OutputBarangWhereInput
  }

  export type OutputBarangDetailBarangIdOutputBarangIdCompoundUniqueInput = {
    barangId: string
    outputBarangId: string
  }

  export type OutputBarangDetailCountOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
    outputBarangId?: SortOrder
  }

  export type OutputBarangDetailAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type OutputBarangDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
    outputBarangId?: SortOrder
  }

  export type OutputBarangDetailMinOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    barangId?: SortOrder
    requestId?: SortOrder
    outputBarangId?: SortOrder
  }

  export type OutputBarangDetailSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type InputBarangCreateNestedManyWithoutUserInput = {
    create?: XOR<InputBarangCreateWithoutUserInput, InputBarangUncheckedCreateWithoutUserInput> | InputBarangCreateWithoutUserInput[] | InputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InputBarangCreateOrConnectWithoutUserInput | InputBarangCreateOrConnectWithoutUserInput[]
    createMany?: InputBarangCreateManyUserInputEnvelope
    connect?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
  }

  export type OutputBarangCreateNestedManyWithoutUserInput = {
    create?: XOR<OutputBarangCreateWithoutUserInput, OutputBarangUncheckedCreateWithoutUserInput> | OutputBarangCreateWithoutUserInput[] | OutputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputBarangCreateOrConnectWithoutUserInput | OutputBarangCreateOrConnectWithoutUserInput[]
    createMany?: OutputBarangCreateManyUserInputEnvelope
    connect?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
  }

  export type InputBarangUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InputBarangCreateWithoutUserInput, InputBarangUncheckedCreateWithoutUserInput> | InputBarangCreateWithoutUserInput[] | InputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InputBarangCreateOrConnectWithoutUserInput | InputBarangCreateOrConnectWithoutUserInput[]
    createMany?: InputBarangCreateManyUserInputEnvelope
    connect?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
  }

  export type OutputBarangUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OutputBarangCreateWithoutUserInput, OutputBarangUncheckedCreateWithoutUserInput> | OutputBarangCreateWithoutUserInput[] | OutputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputBarangCreateOrConnectWithoutUserInput | OutputBarangCreateOrConnectWithoutUserInput[]
    createMany?: OutputBarangCreateManyUserInputEnvelope
    connect?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InputBarangUpdateManyWithoutUserNestedInput = {
    create?: XOR<InputBarangCreateWithoutUserInput, InputBarangUncheckedCreateWithoutUserInput> | InputBarangCreateWithoutUserInput[] | InputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InputBarangCreateOrConnectWithoutUserInput | InputBarangCreateOrConnectWithoutUserInput[]
    upsert?: InputBarangUpsertWithWhereUniqueWithoutUserInput | InputBarangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InputBarangCreateManyUserInputEnvelope
    set?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    disconnect?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    delete?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    connect?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    update?: InputBarangUpdateWithWhereUniqueWithoutUserInput | InputBarangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InputBarangUpdateManyWithWhereWithoutUserInput | InputBarangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InputBarangScalarWhereInput | InputBarangScalarWhereInput[]
  }

  export type OutputBarangUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutputBarangCreateWithoutUserInput, OutputBarangUncheckedCreateWithoutUserInput> | OutputBarangCreateWithoutUserInput[] | OutputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputBarangCreateOrConnectWithoutUserInput | OutputBarangCreateOrConnectWithoutUserInput[]
    upsert?: OutputBarangUpsertWithWhereUniqueWithoutUserInput | OutputBarangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutputBarangCreateManyUserInputEnvelope
    set?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    disconnect?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    delete?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    connect?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    update?: OutputBarangUpdateWithWhereUniqueWithoutUserInput | OutputBarangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutputBarangUpdateManyWithWhereWithoutUserInput | OutputBarangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutputBarangScalarWhereInput | OutputBarangScalarWhereInput[]
  }

  export type InputBarangUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InputBarangCreateWithoutUserInput, InputBarangUncheckedCreateWithoutUserInput> | InputBarangCreateWithoutUserInput[] | InputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InputBarangCreateOrConnectWithoutUserInput | InputBarangCreateOrConnectWithoutUserInput[]
    upsert?: InputBarangUpsertWithWhereUniqueWithoutUserInput | InputBarangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InputBarangCreateManyUserInputEnvelope
    set?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    disconnect?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    delete?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    connect?: InputBarangWhereUniqueInput | InputBarangWhereUniqueInput[]
    update?: InputBarangUpdateWithWhereUniqueWithoutUserInput | InputBarangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InputBarangUpdateManyWithWhereWithoutUserInput | InputBarangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InputBarangScalarWhereInput | InputBarangScalarWhereInput[]
  }

  export type OutputBarangUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutputBarangCreateWithoutUserInput, OutputBarangUncheckedCreateWithoutUserInput> | OutputBarangCreateWithoutUserInput[] | OutputBarangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutputBarangCreateOrConnectWithoutUserInput | OutputBarangCreateOrConnectWithoutUserInput[]
    upsert?: OutputBarangUpsertWithWhereUniqueWithoutUserInput | OutputBarangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutputBarangCreateManyUserInputEnvelope
    set?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    disconnect?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    delete?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    connect?: OutputBarangWhereUniqueInput | OutputBarangWhereUniqueInput[]
    update?: OutputBarangUpdateWithWhereUniqueWithoutUserInput | OutputBarangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutputBarangUpdateManyWithWhereWithoutUserInput | OutputBarangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutputBarangScalarWhereInput | OutputBarangScalarWhereInput[]
  }

  export type InputBarangDetailCreateNestedManyWithoutBarangInput = {
    create?: XOR<InputBarangDetailCreateWithoutBarangInput, InputBarangDetailUncheckedCreateWithoutBarangInput> | InputBarangDetailCreateWithoutBarangInput[] | InputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutBarangInput | InputBarangDetailCreateOrConnectWithoutBarangInput[]
    createMany?: InputBarangDetailCreateManyBarangInputEnvelope
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
  }

  export type OutputBarangDetailCreateNestedManyWithoutBarangInput = {
    create?: XOR<OutputBarangDetailCreateWithoutBarangInput, OutputBarangDetailUncheckedCreateWithoutBarangInput> | OutputBarangDetailCreateWithoutBarangInput[] | OutputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutBarangInput | OutputBarangDetailCreateOrConnectWithoutBarangInput[]
    createMany?: OutputBarangDetailCreateManyBarangInputEnvelope
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
  }

  export type InputBarangDetailUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<InputBarangDetailCreateWithoutBarangInput, InputBarangDetailUncheckedCreateWithoutBarangInput> | InputBarangDetailCreateWithoutBarangInput[] | InputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutBarangInput | InputBarangDetailCreateOrConnectWithoutBarangInput[]
    createMany?: InputBarangDetailCreateManyBarangInputEnvelope
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
  }

  export type OutputBarangDetailUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<OutputBarangDetailCreateWithoutBarangInput, OutputBarangDetailUncheckedCreateWithoutBarangInput> | OutputBarangDetailCreateWithoutBarangInput[] | OutputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutBarangInput | OutputBarangDetailCreateOrConnectWithoutBarangInput[]
    createMany?: OutputBarangDetailCreateManyBarangInputEnvelope
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InputBarangDetailUpdateManyWithoutBarangNestedInput = {
    create?: XOR<InputBarangDetailCreateWithoutBarangInput, InputBarangDetailUncheckedCreateWithoutBarangInput> | InputBarangDetailCreateWithoutBarangInput[] | InputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutBarangInput | InputBarangDetailCreateOrConnectWithoutBarangInput[]
    upsert?: InputBarangDetailUpsertWithWhereUniqueWithoutBarangInput | InputBarangDetailUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: InputBarangDetailCreateManyBarangInputEnvelope
    set?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    disconnect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    delete?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    update?: InputBarangDetailUpdateWithWhereUniqueWithoutBarangInput | InputBarangDetailUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: InputBarangDetailUpdateManyWithWhereWithoutBarangInput | InputBarangDetailUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: InputBarangDetailScalarWhereInput | InputBarangDetailScalarWhereInput[]
  }

  export type OutputBarangDetailUpdateManyWithoutBarangNestedInput = {
    create?: XOR<OutputBarangDetailCreateWithoutBarangInput, OutputBarangDetailUncheckedCreateWithoutBarangInput> | OutputBarangDetailCreateWithoutBarangInput[] | OutputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutBarangInput | OutputBarangDetailCreateOrConnectWithoutBarangInput[]
    upsert?: OutputBarangDetailUpsertWithWhereUniqueWithoutBarangInput | OutputBarangDetailUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: OutputBarangDetailCreateManyBarangInputEnvelope
    set?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    disconnect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    delete?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    update?: OutputBarangDetailUpdateWithWhereUniqueWithoutBarangInput | OutputBarangDetailUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: OutputBarangDetailUpdateManyWithWhereWithoutBarangInput | OutputBarangDetailUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: OutputBarangDetailScalarWhereInput | OutputBarangDetailScalarWhereInput[]
  }

  export type InputBarangDetailUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<InputBarangDetailCreateWithoutBarangInput, InputBarangDetailUncheckedCreateWithoutBarangInput> | InputBarangDetailCreateWithoutBarangInput[] | InputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutBarangInput | InputBarangDetailCreateOrConnectWithoutBarangInput[]
    upsert?: InputBarangDetailUpsertWithWhereUniqueWithoutBarangInput | InputBarangDetailUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: InputBarangDetailCreateManyBarangInputEnvelope
    set?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    disconnect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    delete?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    update?: InputBarangDetailUpdateWithWhereUniqueWithoutBarangInput | InputBarangDetailUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: InputBarangDetailUpdateManyWithWhereWithoutBarangInput | InputBarangDetailUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: InputBarangDetailScalarWhereInput | InputBarangDetailScalarWhereInput[]
  }

  export type OutputBarangDetailUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<OutputBarangDetailCreateWithoutBarangInput, OutputBarangDetailUncheckedCreateWithoutBarangInput> | OutputBarangDetailCreateWithoutBarangInput[] | OutputBarangDetailUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutBarangInput | OutputBarangDetailCreateOrConnectWithoutBarangInput[]
    upsert?: OutputBarangDetailUpsertWithWhereUniqueWithoutBarangInput | OutputBarangDetailUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: OutputBarangDetailCreateManyBarangInputEnvelope
    set?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    disconnect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    delete?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    update?: OutputBarangDetailUpdateWithWhereUniqueWithoutBarangInput | OutputBarangDetailUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: OutputBarangDetailUpdateManyWithWhereWithoutBarangInput | OutputBarangDetailUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: OutputBarangDetailScalarWhereInput | OutputBarangDetailScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInputBarangsInput = {
    create?: XOR<UserCreateWithoutInputBarangsInput, UserUncheckedCreateWithoutInputBarangsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInputBarangsInput
    connect?: UserWhereUniqueInput
  }

  export type InputBarangDetailCreateNestedManyWithoutInputBarangInput = {
    create?: XOR<InputBarangDetailCreateWithoutInputBarangInput, InputBarangDetailUncheckedCreateWithoutInputBarangInput> | InputBarangDetailCreateWithoutInputBarangInput[] | InputBarangDetailUncheckedCreateWithoutInputBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutInputBarangInput | InputBarangDetailCreateOrConnectWithoutInputBarangInput[]
    createMany?: InputBarangDetailCreateManyInputBarangInputEnvelope
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
  }

  export type InputBarangDetailUncheckedCreateNestedManyWithoutInputBarangInput = {
    create?: XOR<InputBarangDetailCreateWithoutInputBarangInput, InputBarangDetailUncheckedCreateWithoutInputBarangInput> | InputBarangDetailCreateWithoutInputBarangInput[] | InputBarangDetailUncheckedCreateWithoutInputBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutInputBarangInput | InputBarangDetailCreateOrConnectWithoutInputBarangInput[]
    createMany?: InputBarangDetailCreateManyInputBarangInputEnvelope
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInputBarangsNestedInput = {
    create?: XOR<UserCreateWithoutInputBarangsInput, UserUncheckedCreateWithoutInputBarangsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInputBarangsInput
    upsert?: UserUpsertWithoutInputBarangsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInputBarangsInput, UserUpdateWithoutInputBarangsInput>, UserUncheckedUpdateWithoutInputBarangsInput>
  }

  export type InputBarangDetailUpdateManyWithoutInputBarangNestedInput = {
    create?: XOR<InputBarangDetailCreateWithoutInputBarangInput, InputBarangDetailUncheckedCreateWithoutInputBarangInput> | InputBarangDetailCreateWithoutInputBarangInput[] | InputBarangDetailUncheckedCreateWithoutInputBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutInputBarangInput | InputBarangDetailCreateOrConnectWithoutInputBarangInput[]
    upsert?: InputBarangDetailUpsertWithWhereUniqueWithoutInputBarangInput | InputBarangDetailUpsertWithWhereUniqueWithoutInputBarangInput[]
    createMany?: InputBarangDetailCreateManyInputBarangInputEnvelope
    set?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    disconnect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    delete?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    update?: InputBarangDetailUpdateWithWhereUniqueWithoutInputBarangInput | InputBarangDetailUpdateWithWhereUniqueWithoutInputBarangInput[]
    updateMany?: InputBarangDetailUpdateManyWithWhereWithoutInputBarangInput | InputBarangDetailUpdateManyWithWhereWithoutInputBarangInput[]
    deleteMany?: InputBarangDetailScalarWhereInput | InputBarangDetailScalarWhereInput[]
  }

  export type InputBarangDetailUncheckedUpdateManyWithoutInputBarangNestedInput = {
    create?: XOR<InputBarangDetailCreateWithoutInputBarangInput, InputBarangDetailUncheckedCreateWithoutInputBarangInput> | InputBarangDetailCreateWithoutInputBarangInput[] | InputBarangDetailUncheckedCreateWithoutInputBarangInput[]
    connectOrCreate?: InputBarangDetailCreateOrConnectWithoutInputBarangInput | InputBarangDetailCreateOrConnectWithoutInputBarangInput[]
    upsert?: InputBarangDetailUpsertWithWhereUniqueWithoutInputBarangInput | InputBarangDetailUpsertWithWhereUniqueWithoutInputBarangInput[]
    createMany?: InputBarangDetailCreateManyInputBarangInputEnvelope
    set?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    disconnect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    delete?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    connect?: InputBarangDetailWhereUniqueInput | InputBarangDetailWhereUniqueInput[]
    update?: InputBarangDetailUpdateWithWhereUniqueWithoutInputBarangInput | InputBarangDetailUpdateWithWhereUniqueWithoutInputBarangInput[]
    updateMany?: InputBarangDetailUpdateManyWithWhereWithoutInputBarangInput | InputBarangDetailUpdateManyWithWhereWithoutInputBarangInput[]
    deleteMany?: InputBarangDetailScalarWhereInput | InputBarangDetailScalarWhereInput[]
  }

  export type BarangCreateNestedOneWithoutInputBarangDetailsInput = {
    create?: XOR<BarangCreateWithoutInputBarangDetailsInput, BarangUncheckedCreateWithoutInputBarangDetailsInput>
    connectOrCreate?: BarangCreateOrConnectWithoutInputBarangDetailsInput
    connect?: BarangWhereUniqueInput
  }

  export type InputBarangCreateNestedOneWithoutInputBarangDetailsInput = {
    create?: XOR<InputBarangCreateWithoutInputBarangDetailsInput, InputBarangUncheckedCreateWithoutInputBarangDetailsInput>
    connectOrCreate?: InputBarangCreateOrConnectWithoutInputBarangDetailsInput
    connect?: InputBarangWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarangUpdateOneRequiredWithoutInputBarangDetailsNestedInput = {
    create?: XOR<BarangCreateWithoutInputBarangDetailsInput, BarangUncheckedCreateWithoutInputBarangDetailsInput>
    connectOrCreate?: BarangCreateOrConnectWithoutInputBarangDetailsInput
    upsert?: BarangUpsertWithoutInputBarangDetailsInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutInputBarangDetailsInput, BarangUpdateWithoutInputBarangDetailsInput>, BarangUncheckedUpdateWithoutInputBarangDetailsInput>
  }

  export type InputBarangUpdateOneRequiredWithoutInputBarangDetailsNestedInput = {
    create?: XOR<InputBarangCreateWithoutInputBarangDetailsInput, InputBarangUncheckedCreateWithoutInputBarangDetailsInput>
    connectOrCreate?: InputBarangCreateOrConnectWithoutInputBarangDetailsInput
    upsert?: InputBarangUpsertWithoutInputBarangDetailsInput
    connect?: InputBarangWhereUniqueInput
    update?: XOR<XOR<InputBarangUpdateToOneWithWhereWithoutInputBarangDetailsInput, InputBarangUpdateWithoutInputBarangDetailsInput>, InputBarangUncheckedUpdateWithoutInputBarangDetailsInput>
  }

  export type UserCreateNestedOneWithoutOutputBarangsInput = {
    create?: XOR<UserCreateWithoutOutputBarangsInput, UserUncheckedCreateWithoutOutputBarangsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutputBarangsInput
    connect?: UserWhereUniqueInput
  }

  export type OutputBarangDetailCreateNestedManyWithoutOutputBarangInput = {
    create?: XOR<OutputBarangDetailCreateWithoutOutputBarangInput, OutputBarangDetailUncheckedCreateWithoutOutputBarangInput> | OutputBarangDetailCreateWithoutOutputBarangInput[] | OutputBarangDetailUncheckedCreateWithoutOutputBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutOutputBarangInput | OutputBarangDetailCreateOrConnectWithoutOutputBarangInput[]
    createMany?: OutputBarangDetailCreateManyOutputBarangInputEnvelope
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
  }

  export type OutputBarangDetailUncheckedCreateNestedManyWithoutOutputBarangInput = {
    create?: XOR<OutputBarangDetailCreateWithoutOutputBarangInput, OutputBarangDetailUncheckedCreateWithoutOutputBarangInput> | OutputBarangDetailCreateWithoutOutputBarangInput[] | OutputBarangDetailUncheckedCreateWithoutOutputBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutOutputBarangInput | OutputBarangDetailCreateOrConnectWithoutOutputBarangInput[]
    createMany?: OutputBarangDetailCreateManyOutputBarangInputEnvelope
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOutputBarangsNestedInput = {
    create?: XOR<UserCreateWithoutOutputBarangsInput, UserUncheckedCreateWithoutOutputBarangsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutputBarangsInput
    upsert?: UserUpsertWithoutOutputBarangsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutputBarangsInput, UserUpdateWithoutOutputBarangsInput>, UserUncheckedUpdateWithoutOutputBarangsInput>
  }

  export type OutputBarangDetailUpdateManyWithoutOutputBarangNestedInput = {
    create?: XOR<OutputBarangDetailCreateWithoutOutputBarangInput, OutputBarangDetailUncheckedCreateWithoutOutputBarangInput> | OutputBarangDetailCreateWithoutOutputBarangInput[] | OutputBarangDetailUncheckedCreateWithoutOutputBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutOutputBarangInput | OutputBarangDetailCreateOrConnectWithoutOutputBarangInput[]
    upsert?: OutputBarangDetailUpsertWithWhereUniqueWithoutOutputBarangInput | OutputBarangDetailUpsertWithWhereUniqueWithoutOutputBarangInput[]
    createMany?: OutputBarangDetailCreateManyOutputBarangInputEnvelope
    set?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    disconnect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    delete?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    update?: OutputBarangDetailUpdateWithWhereUniqueWithoutOutputBarangInput | OutputBarangDetailUpdateWithWhereUniqueWithoutOutputBarangInput[]
    updateMany?: OutputBarangDetailUpdateManyWithWhereWithoutOutputBarangInput | OutputBarangDetailUpdateManyWithWhereWithoutOutputBarangInput[]
    deleteMany?: OutputBarangDetailScalarWhereInput | OutputBarangDetailScalarWhereInput[]
  }

  export type OutputBarangDetailUncheckedUpdateManyWithoutOutputBarangNestedInput = {
    create?: XOR<OutputBarangDetailCreateWithoutOutputBarangInput, OutputBarangDetailUncheckedCreateWithoutOutputBarangInput> | OutputBarangDetailCreateWithoutOutputBarangInput[] | OutputBarangDetailUncheckedCreateWithoutOutputBarangInput[]
    connectOrCreate?: OutputBarangDetailCreateOrConnectWithoutOutputBarangInput | OutputBarangDetailCreateOrConnectWithoutOutputBarangInput[]
    upsert?: OutputBarangDetailUpsertWithWhereUniqueWithoutOutputBarangInput | OutputBarangDetailUpsertWithWhereUniqueWithoutOutputBarangInput[]
    createMany?: OutputBarangDetailCreateManyOutputBarangInputEnvelope
    set?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    disconnect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    delete?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    connect?: OutputBarangDetailWhereUniqueInput | OutputBarangDetailWhereUniqueInput[]
    update?: OutputBarangDetailUpdateWithWhereUniqueWithoutOutputBarangInput | OutputBarangDetailUpdateWithWhereUniqueWithoutOutputBarangInput[]
    updateMany?: OutputBarangDetailUpdateManyWithWhereWithoutOutputBarangInput | OutputBarangDetailUpdateManyWithWhereWithoutOutputBarangInput[]
    deleteMany?: OutputBarangDetailScalarWhereInput | OutputBarangDetailScalarWhereInput[]
  }

  export type BarangCreateNestedOneWithoutOutputBarangDetailsInput = {
    create?: XOR<BarangCreateWithoutOutputBarangDetailsInput, BarangUncheckedCreateWithoutOutputBarangDetailsInput>
    connectOrCreate?: BarangCreateOrConnectWithoutOutputBarangDetailsInput
    connect?: BarangWhereUniqueInput
  }

  export type OutputBarangCreateNestedOneWithoutOutputBarangDetailsInput = {
    create?: XOR<OutputBarangCreateWithoutOutputBarangDetailsInput, OutputBarangUncheckedCreateWithoutOutputBarangDetailsInput>
    connectOrCreate?: OutputBarangCreateOrConnectWithoutOutputBarangDetailsInput
    connect?: OutputBarangWhereUniqueInput
  }

  export type BarangUpdateOneRequiredWithoutOutputBarangDetailsNestedInput = {
    create?: XOR<BarangCreateWithoutOutputBarangDetailsInput, BarangUncheckedCreateWithoutOutputBarangDetailsInput>
    connectOrCreate?: BarangCreateOrConnectWithoutOutputBarangDetailsInput
    upsert?: BarangUpsertWithoutOutputBarangDetailsInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutOutputBarangDetailsInput, BarangUpdateWithoutOutputBarangDetailsInput>, BarangUncheckedUpdateWithoutOutputBarangDetailsInput>
  }

  export type OutputBarangUpdateOneRequiredWithoutOutputBarangDetailsNestedInput = {
    create?: XOR<OutputBarangCreateWithoutOutputBarangDetailsInput, OutputBarangUncheckedCreateWithoutOutputBarangDetailsInput>
    connectOrCreate?: OutputBarangCreateOrConnectWithoutOutputBarangDetailsInput
    upsert?: OutputBarangUpsertWithoutOutputBarangDetailsInput
    connect?: OutputBarangWhereUniqueInput
    update?: XOR<XOR<OutputBarangUpdateToOneWithWhereWithoutOutputBarangDetailsInput, OutputBarangUpdateWithoutOutputBarangDetailsInput>, OutputBarangUncheckedUpdateWithoutOutputBarangDetailsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InputBarangCreateWithoutUserInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
    inputBarangDetails?: InputBarangDetailCreateNestedManyWithoutInputBarangInput
  }

  export type InputBarangUncheckedCreateWithoutUserInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
    inputBarangDetails?: InputBarangDetailUncheckedCreateNestedManyWithoutInputBarangInput
  }

  export type InputBarangCreateOrConnectWithoutUserInput = {
    where: InputBarangWhereUniqueInput
    create: XOR<InputBarangCreateWithoutUserInput, InputBarangUncheckedCreateWithoutUserInput>
  }

  export type InputBarangCreateManyUserInputEnvelope = {
    data: InputBarangCreateManyUserInput | InputBarangCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OutputBarangCreateWithoutUserInput = {
    id?: string
    tanggal: string
    bagian: string
    requestId: string
    outputBarangDetails?: OutputBarangDetailCreateNestedManyWithoutOutputBarangInput
  }

  export type OutputBarangUncheckedCreateWithoutUserInput = {
    id?: string
    tanggal: string
    bagian: string
    requestId: string
    outputBarangDetails?: OutputBarangDetailUncheckedCreateNestedManyWithoutOutputBarangInput
  }

  export type OutputBarangCreateOrConnectWithoutUserInput = {
    where: OutputBarangWhereUniqueInput
    create: XOR<OutputBarangCreateWithoutUserInput, OutputBarangUncheckedCreateWithoutUserInput>
  }

  export type OutputBarangCreateManyUserInputEnvelope = {
    data: OutputBarangCreateManyUserInput | OutputBarangCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InputBarangUpsertWithWhereUniqueWithoutUserInput = {
    where: InputBarangWhereUniqueInput
    update: XOR<InputBarangUpdateWithoutUserInput, InputBarangUncheckedUpdateWithoutUserInput>
    create: XOR<InputBarangCreateWithoutUserInput, InputBarangUncheckedCreateWithoutUserInput>
  }

  export type InputBarangUpdateWithWhereUniqueWithoutUserInput = {
    where: InputBarangWhereUniqueInput
    data: XOR<InputBarangUpdateWithoutUserInput, InputBarangUncheckedUpdateWithoutUserInput>
  }

  export type InputBarangUpdateManyWithWhereWithoutUserInput = {
    where: InputBarangScalarWhereInput
    data: XOR<InputBarangUpdateManyMutationInput, InputBarangUncheckedUpdateManyWithoutUserInput>
  }

  export type InputBarangScalarWhereInput = {
    AND?: InputBarangScalarWhereInput | InputBarangScalarWhereInput[]
    OR?: InputBarangScalarWhereInput[]
    NOT?: InputBarangScalarWhereInput | InputBarangScalarWhereInput[]
    id?: StringFilter<"InputBarang"> | string
    tanggal?: StringFilter<"InputBarang"> | string
    namaPengadaan?: StringFilter<"InputBarang"> | string
    userId?: StringFilter<"InputBarang"> | string
  }

  export type OutputBarangUpsertWithWhereUniqueWithoutUserInput = {
    where: OutputBarangWhereUniqueInput
    update: XOR<OutputBarangUpdateWithoutUserInput, OutputBarangUncheckedUpdateWithoutUserInput>
    create: XOR<OutputBarangCreateWithoutUserInput, OutputBarangUncheckedCreateWithoutUserInput>
  }

  export type OutputBarangUpdateWithWhereUniqueWithoutUserInput = {
    where: OutputBarangWhereUniqueInput
    data: XOR<OutputBarangUpdateWithoutUserInput, OutputBarangUncheckedUpdateWithoutUserInput>
  }

  export type OutputBarangUpdateManyWithWhereWithoutUserInput = {
    where: OutputBarangScalarWhereInput
    data: XOR<OutputBarangUpdateManyMutationInput, OutputBarangUncheckedUpdateManyWithoutUserInput>
  }

  export type OutputBarangScalarWhereInput = {
    AND?: OutputBarangScalarWhereInput | OutputBarangScalarWhereInput[]
    OR?: OutputBarangScalarWhereInput[]
    NOT?: OutputBarangScalarWhereInput | OutputBarangScalarWhereInput[]
    id?: StringFilter<"OutputBarang"> | string
    tanggal?: StringFilter<"OutputBarang"> | string
    userId?: StringFilter<"OutputBarang"> | string
    bagian?: StringFilter<"OutputBarang"> | string
    requestId?: StringFilter<"OutputBarang"> | string
  }

  export type InputBarangDetailCreateWithoutBarangInput = {
    id?: string
    jumlah: number
    inputBarang: InputBarangCreateNestedOneWithoutInputBarangDetailsInput
  }

  export type InputBarangDetailUncheckedCreateWithoutBarangInput = {
    id?: string
    jumlah: number
    inputBarangId: string
  }

  export type InputBarangDetailCreateOrConnectWithoutBarangInput = {
    where: InputBarangDetailWhereUniqueInput
    create: XOR<InputBarangDetailCreateWithoutBarangInput, InputBarangDetailUncheckedCreateWithoutBarangInput>
  }

  export type InputBarangDetailCreateManyBarangInputEnvelope = {
    data: InputBarangDetailCreateManyBarangInput | InputBarangDetailCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type OutputBarangDetailCreateWithoutBarangInput = {
    id?: string
    jumlah: number
    requestId: string
    outputBarang: OutputBarangCreateNestedOneWithoutOutputBarangDetailsInput
  }

  export type OutputBarangDetailUncheckedCreateWithoutBarangInput = {
    id?: string
    jumlah: number
    requestId: string
    outputBarangId: string
  }

  export type OutputBarangDetailCreateOrConnectWithoutBarangInput = {
    where: OutputBarangDetailWhereUniqueInput
    create: XOR<OutputBarangDetailCreateWithoutBarangInput, OutputBarangDetailUncheckedCreateWithoutBarangInput>
  }

  export type OutputBarangDetailCreateManyBarangInputEnvelope = {
    data: OutputBarangDetailCreateManyBarangInput | OutputBarangDetailCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type InputBarangDetailUpsertWithWhereUniqueWithoutBarangInput = {
    where: InputBarangDetailWhereUniqueInput
    update: XOR<InputBarangDetailUpdateWithoutBarangInput, InputBarangDetailUncheckedUpdateWithoutBarangInput>
    create: XOR<InputBarangDetailCreateWithoutBarangInput, InputBarangDetailUncheckedCreateWithoutBarangInput>
  }

  export type InputBarangDetailUpdateWithWhereUniqueWithoutBarangInput = {
    where: InputBarangDetailWhereUniqueInput
    data: XOR<InputBarangDetailUpdateWithoutBarangInput, InputBarangDetailUncheckedUpdateWithoutBarangInput>
  }

  export type InputBarangDetailUpdateManyWithWhereWithoutBarangInput = {
    where: InputBarangDetailScalarWhereInput
    data: XOR<InputBarangDetailUpdateManyMutationInput, InputBarangDetailUncheckedUpdateManyWithoutBarangInput>
  }

  export type InputBarangDetailScalarWhereInput = {
    AND?: InputBarangDetailScalarWhereInput | InputBarangDetailScalarWhereInput[]
    OR?: InputBarangDetailScalarWhereInput[]
    NOT?: InputBarangDetailScalarWhereInput | InputBarangDetailScalarWhereInput[]
    id?: StringFilter<"InputBarangDetail"> | string
    jumlah?: IntFilter<"InputBarangDetail"> | number
    barangId?: StringFilter<"InputBarangDetail"> | string
    inputBarangId?: StringFilter<"InputBarangDetail"> | string
  }

  export type OutputBarangDetailUpsertWithWhereUniqueWithoutBarangInput = {
    where: OutputBarangDetailWhereUniqueInput
    update: XOR<OutputBarangDetailUpdateWithoutBarangInput, OutputBarangDetailUncheckedUpdateWithoutBarangInput>
    create: XOR<OutputBarangDetailCreateWithoutBarangInput, OutputBarangDetailUncheckedCreateWithoutBarangInput>
  }

  export type OutputBarangDetailUpdateWithWhereUniqueWithoutBarangInput = {
    where: OutputBarangDetailWhereUniqueInput
    data: XOR<OutputBarangDetailUpdateWithoutBarangInput, OutputBarangDetailUncheckedUpdateWithoutBarangInput>
  }

  export type OutputBarangDetailUpdateManyWithWhereWithoutBarangInput = {
    where: OutputBarangDetailScalarWhereInput
    data: XOR<OutputBarangDetailUpdateManyMutationInput, OutputBarangDetailUncheckedUpdateManyWithoutBarangInput>
  }

  export type OutputBarangDetailScalarWhereInput = {
    AND?: OutputBarangDetailScalarWhereInput | OutputBarangDetailScalarWhereInput[]
    OR?: OutputBarangDetailScalarWhereInput[]
    NOT?: OutputBarangDetailScalarWhereInput | OutputBarangDetailScalarWhereInput[]
    id?: StringFilter<"OutputBarangDetail"> | string
    jumlah?: IntFilter<"OutputBarangDetail"> | number
    barangId?: StringFilter<"OutputBarangDetail"> | string
    requestId?: StringFilter<"OutputBarangDetail"> | string
    outputBarangId?: StringFilter<"OutputBarangDetail"> | string
  }

  export type UserCreateWithoutInputBarangsInput = {
    id?: string
    name: string
    nip: string
    bagian: string
    isAdmin?: boolean
    password: string
    email: string
    outputBarangs?: OutputBarangCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInputBarangsInput = {
    id?: string
    name: string
    nip: string
    bagian: string
    isAdmin?: boolean
    password: string
    email: string
    outputBarangs?: OutputBarangUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInputBarangsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInputBarangsInput, UserUncheckedCreateWithoutInputBarangsInput>
  }

  export type InputBarangDetailCreateWithoutInputBarangInput = {
    id?: string
    jumlah: number
    barang: BarangCreateNestedOneWithoutInputBarangDetailsInput
  }

  export type InputBarangDetailUncheckedCreateWithoutInputBarangInput = {
    id?: string
    jumlah: number
    barangId: string
  }

  export type InputBarangDetailCreateOrConnectWithoutInputBarangInput = {
    where: InputBarangDetailWhereUniqueInput
    create: XOR<InputBarangDetailCreateWithoutInputBarangInput, InputBarangDetailUncheckedCreateWithoutInputBarangInput>
  }

  export type InputBarangDetailCreateManyInputBarangInputEnvelope = {
    data: InputBarangDetailCreateManyInputBarangInput | InputBarangDetailCreateManyInputBarangInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInputBarangsInput = {
    update: XOR<UserUpdateWithoutInputBarangsInput, UserUncheckedUpdateWithoutInputBarangsInput>
    create: XOR<UserCreateWithoutInputBarangsInput, UserUncheckedCreateWithoutInputBarangsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInputBarangsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInputBarangsInput, UserUncheckedUpdateWithoutInputBarangsInput>
  }

  export type UserUpdateWithoutInputBarangsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    outputBarangs?: OutputBarangUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInputBarangsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    outputBarangs?: OutputBarangUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InputBarangDetailUpsertWithWhereUniqueWithoutInputBarangInput = {
    where: InputBarangDetailWhereUniqueInput
    update: XOR<InputBarangDetailUpdateWithoutInputBarangInput, InputBarangDetailUncheckedUpdateWithoutInputBarangInput>
    create: XOR<InputBarangDetailCreateWithoutInputBarangInput, InputBarangDetailUncheckedCreateWithoutInputBarangInput>
  }

  export type InputBarangDetailUpdateWithWhereUniqueWithoutInputBarangInput = {
    where: InputBarangDetailWhereUniqueInput
    data: XOR<InputBarangDetailUpdateWithoutInputBarangInput, InputBarangDetailUncheckedUpdateWithoutInputBarangInput>
  }

  export type InputBarangDetailUpdateManyWithWhereWithoutInputBarangInput = {
    where: InputBarangDetailScalarWhereInput
    data: XOR<InputBarangDetailUpdateManyMutationInput, InputBarangDetailUncheckedUpdateManyWithoutInputBarangInput>
  }

  export type BarangCreateWithoutInputBarangDetailsInput = {
    id?: string
    namaBarang: string
    satuanBarang: string
    stokBarang?: number | null
    gambarUrl?: string | null
    kategori?: string | null
    outputBarangDetails?: OutputBarangDetailCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutInputBarangDetailsInput = {
    id?: string
    namaBarang: string
    satuanBarang: string
    stokBarang?: number | null
    gambarUrl?: string | null
    kategori?: string | null
    outputBarangDetails?: OutputBarangDetailUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangCreateOrConnectWithoutInputBarangDetailsInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutInputBarangDetailsInput, BarangUncheckedCreateWithoutInputBarangDetailsInput>
  }

  export type InputBarangCreateWithoutInputBarangDetailsInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
    user: UserCreateNestedOneWithoutInputBarangsInput
  }

  export type InputBarangUncheckedCreateWithoutInputBarangDetailsInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
    userId: string
  }

  export type InputBarangCreateOrConnectWithoutInputBarangDetailsInput = {
    where: InputBarangWhereUniqueInput
    create: XOR<InputBarangCreateWithoutInputBarangDetailsInput, InputBarangUncheckedCreateWithoutInputBarangDetailsInput>
  }

  export type BarangUpsertWithoutInputBarangDetailsInput = {
    update: XOR<BarangUpdateWithoutInputBarangDetailsInput, BarangUncheckedUpdateWithoutInputBarangDetailsInput>
    create: XOR<BarangCreateWithoutInputBarangDetailsInput, BarangUncheckedCreateWithoutInputBarangDetailsInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutInputBarangDetailsInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutInputBarangDetailsInput, BarangUncheckedUpdateWithoutInputBarangDetailsInput>
  }

  export type BarangUpdateWithoutInputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    outputBarangDetails?: OutputBarangDetailUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutInputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    outputBarangDetails?: OutputBarangDetailUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type InputBarangUpsertWithoutInputBarangDetailsInput = {
    update: XOR<InputBarangUpdateWithoutInputBarangDetailsInput, InputBarangUncheckedUpdateWithoutInputBarangDetailsInput>
    create: XOR<InputBarangCreateWithoutInputBarangDetailsInput, InputBarangUncheckedCreateWithoutInputBarangDetailsInput>
    where?: InputBarangWhereInput
  }

  export type InputBarangUpdateToOneWithWhereWithoutInputBarangDetailsInput = {
    where?: InputBarangWhereInput
    data: XOR<InputBarangUpdateWithoutInputBarangDetailsInput, InputBarangUncheckedUpdateWithoutInputBarangDetailsInput>
  }

  export type InputBarangUpdateWithoutInputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInputBarangsNestedInput
  }

  export type InputBarangUncheckedUpdateWithoutInputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutOutputBarangsInput = {
    id?: string
    name: string
    nip: string
    bagian: string
    isAdmin?: boolean
    password: string
    email: string
    inputBarangs?: InputBarangCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOutputBarangsInput = {
    id?: string
    name: string
    nip: string
    bagian: string
    isAdmin?: boolean
    password: string
    email: string
    inputBarangs?: InputBarangUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOutputBarangsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutputBarangsInput, UserUncheckedCreateWithoutOutputBarangsInput>
  }

  export type OutputBarangDetailCreateWithoutOutputBarangInput = {
    id?: string
    jumlah: number
    requestId: string
    barang: BarangCreateNestedOneWithoutOutputBarangDetailsInput
  }

  export type OutputBarangDetailUncheckedCreateWithoutOutputBarangInput = {
    id?: string
    jumlah: number
    barangId: string
    requestId: string
  }

  export type OutputBarangDetailCreateOrConnectWithoutOutputBarangInput = {
    where: OutputBarangDetailWhereUniqueInput
    create: XOR<OutputBarangDetailCreateWithoutOutputBarangInput, OutputBarangDetailUncheckedCreateWithoutOutputBarangInput>
  }

  export type OutputBarangDetailCreateManyOutputBarangInputEnvelope = {
    data: OutputBarangDetailCreateManyOutputBarangInput | OutputBarangDetailCreateManyOutputBarangInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOutputBarangsInput = {
    update: XOR<UserUpdateWithoutOutputBarangsInput, UserUncheckedUpdateWithoutOutputBarangsInput>
    create: XOR<UserCreateWithoutOutputBarangsInput, UserUncheckedCreateWithoutOutputBarangsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutputBarangsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutputBarangsInput, UserUncheckedUpdateWithoutOutputBarangsInput>
  }

  export type UserUpdateWithoutOutputBarangsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inputBarangs?: InputBarangUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOutputBarangsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inputBarangs?: InputBarangUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutputBarangDetailUpsertWithWhereUniqueWithoutOutputBarangInput = {
    where: OutputBarangDetailWhereUniqueInput
    update: XOR<OutputBarangDetailUpdateWithoutOutputBarangInput, OutputBarangDetailUncheckedUpdateWithoutOutputBarangInput>
    create: XOR<OutputBarangDetailCreateWithoutOutputBarangInput, OutputBarangDetailUncheckedCreateWithoutOutputBarangInput>
  }

  export type OutputBarangDetailUpdateWithWhereUniqueWithoutOutputBarangInput = {
    where: OutputBarangDetailWhereUniqueInput
    data: XOR<OutputBarangDetailUpdateWithoutOutputBarangInput, OutputBarangDetailUncheckedUpdateWithoutOutputBarangInput>
  }

  export type OutputBarangDetailUpdateManyWithWhereWithoutOutputBarangInput = {
    where: OutputBarangDetailScalarWhereInput
    data: XOR<OutputBarangDetailUpdateManyMutationInput, OutputBarangDetailUncheckedUpdateManyWithoutOutputBarangInput>
  }

  export type BarangCreateWithoutOutputBarangDetailsInput = {
    id?: string
    namaBarang: string
    satuanBarang: string
    stokBarang?: number | null
    gambarUrl?: string | null
    kategori?: string | null
    inputBarangDetails?: InputBarangDetailCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutOutputBarangDetailsInput = {
    id?: string
    namaBarang: string
    satuanBarang: string
    stokBarang?: number | null
    gambarUrl?: string | null
    kategori?: string | null
    inputBarangDetails?: InputBarangDetailUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangCreateOrConnectWithoutOutputBarangDetailsInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutOutputBarangDetailsInput, BarangUncheckedCreateWithoutOutputBarangDetailsInput>
  }

  export type OutputBarangCreateWithoutOutputBarangDetailsInput = {
    id?: string
    tanggal: string
    bagian: string
    requestId: string
    user: UserCreateNestedOneWithoutOutputBarangsInput
  }

  export type OutputBarangUncheckedCreateWithoutOutputBarangDetailsInput = {
    id?: string
    tanggal: string
    userId: string
    bagian: string
    requestId: string
  }

  export type OutputBarangCreateOrConnectWithoutOutputBarangDetailsInput = {
    where: OutputBarangWhereUniqueInput
    create: XOR<OutputBarangCreateWithoutOutputBarangDetailsInput, OutputBarangUncheckedCreateWithoutOutputBarangDetailsInput>
  }

  export type BarangUpsertWithoutOutputBarangDetailsInput = {
    update: XOR<BarangUpdateWithoutOutputBarangDetailsInput, BarangUncheckedUpdateWithoutOutputBarangDetailsInput>
    create: XOR<BarangCreateWithoutOutputBarangDetailsInput, BarangUncheckedCreateWithoutOutputBarangDetailsInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutOutputBarangDetailsInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutOutputBarangDetailsInput, BarangUncheckedUpdateWithoutOutputBarangDetailsInput>
  }

  export type BarangUpdateWithoutOutputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    inputBarangDetails?: InputBarangDetailUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutOutputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    satuanBarang?: StringFieldUpdateOperationsInput | string
    stokBarang?: NullableIntFieldUpdateOperationsInput | number | null
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    inputBarangDetails?: InputBarangDetailUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type OutputBarangUpsertWithoutOutputBarangDetailsInput = {
    update: XOR<OutputBarangUpdateWithoutOutputBarangDetailsInput, OutputBarangUncheckedUpdateWithoutOutputBarangDetailsInput>
    create: XOR<OutputBarangCreateWithoutOutputBarangDetailsInput, OutputBarangUncheckedCreateWithoutOutputBarangDetailsInput>
    where?: OutputBarangWhereInput
  }

  export type OutputBarangUpdateToOneWithWhereWithoutOutputBarangDetailsInput = {
    where?: OutputBarangWhereInput
    data: XOR<OutputBarangUpdateWithoutOutputBarangDetailsInput, OutputBarangUncheckedUpdateWithoutOutputBarangDetailsInput>
  }

  export type OutputBarangUpdateWithoutOutputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOutputBarangsNestedInput
  }

  export type OutputBarangUncheckedUpdateWithoutOutputBarangDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangCreateManyUserInput = {
    id?: string
    tanggal: string
    namaPengadaan: string
  }

  export type OutputBarangCreateManyUserInput = {
    id?: string
    tanggal: string
    bagian: string
    requestId: string
  }

  export type InputBarangUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
    inputBarangDetails?: InputBarangDetailUpdateManyWithoutInputBarangNestedInput
  }

  export type InputBarangUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
    inputBarangDetails?: InputBarangDetailUncheckedUpdateManyWithoutInputBarangNestedInput
  }

  export type InputBarangUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    namaPengadaan?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarangDetails?: OutputBarangDetailUpdateManyWithoutOutputBarangNestedInput
  }

  export type OutputBarangUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarangDetails?: OutputBarangDetailUncheckedUpdateManyWithoutOutputBarangNestedInput
  }

  export type OutputBarangUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: StringFieldUpdateOperationsInput | string
    bagian?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangDetailCreateManyBarangInput = {
    id?: string
    jumlah: number
    inputBarangId: string
  }

  export type OutputBarangDetailCreateManyBarangInput = {
    id?: string
    jumlah: number
    requestId: string
    outputBarangId: string
  }

  export type InputBarangDetailUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    inputBarang?: InputBarangUpdateOneRequiredWithoutInputBarangDetailsNestedInput
  }

  export type InputBarangDetailUncheckedUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    inputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangDetailUncheckedUpdateManyWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    inputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangDetailUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarang?: OutputBarangUpdateOneRequiredWithoutOutputBarangDetailsNestedInput
  }

  export type OutputBarangDetailUncheckedUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangDetailUncheckedUpdateManyWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    outputBarangId?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangDetailCreateManyInputBarangInput = {
    id?: string
    jumlah: number
    barangId: string
  }

  export type InputBarangDetailUpdateWithoutInputBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barang?: BarangUpdateOneRequiredWithoutInputBarangDetailsNestedInput
  }

  export type InputBarangDetailUncheckedUpdateWithoutInputBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
  }

  export type InputBarangDetailUncheckedUpdateManyWithoutInputBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangDetailCreateManyOutputBarangInput = {
    id?: string
    jumlah: number
    barangId: string
    requestId: string
  }

  export type OutputBarangDetailUpdateWithoutOutputBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    barang?: BarangUpdateOneRequiredWithoutOutputBarangDetailsNestedInput
  }

  export type OutputBarangDetailUncheckedUpdateWithoutOutputBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type OutputBarangDetailUncheckedUpdateManyWithoutOutputBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarangCountOutputTypeDefaultArgs instead
     */
    export type BarangCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InputBarangCountOutputTypeDefaultArgs instead
     */
    export type InputBarangCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InputBarangCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutputBarangCountOutputTypeDefaultArgs instead
     */
    export type OutputBarangCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutputBarangCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarangDefaultArgs instead
     */
    export type BarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InputBarangDefaultArgs instead
     */
    export type InputBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InputBarangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InputBarangDetailDefaultArgs instead
     */
    export type InputBarangDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InputBarangDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutputBarangDefaultArgs instead
     */
    export type OutputBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutputBarangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutputBarangDetailDefaultArgs instead
     */
    export type OutputBarangDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutputBarangDetailDefaultArgs<ExtArgs>

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