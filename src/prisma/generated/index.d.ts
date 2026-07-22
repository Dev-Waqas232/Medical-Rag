
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Drug
 * 
 */
export type Drug = $Result.DefaultSelection<Prisma.$DrugPayload>
/**
 * Model Chunk
 * 
 */
export type Chunk = $Result.DefaultSelection<Prisma.$ChunkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Drugs
 * const drugs = await prisma.drug.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Drugs
   * const drugs = await prisma.drug.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.drug`: Exposes CRUD operations for the **Drug** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drugs
    * const drugs = await prisma.drug.findMany()
    * ```
    */
  get drug(): Prisma.DrugDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chunk`: Exposes CRUD operations for the **Chunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chunks
    * const chunks = await prisma.chunk.findMany()
    * ```
    */
  get chunk(): Prisma.ChunkDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Drug: 'Drug',
    Chunk: 'Chunk'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "drug" | "chunk"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Drug: {
        payload: Prisma.$DrugPayload<ExtArgs>
        fields: Prisma.DrugFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrugFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrugFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          findFirst: {
            args: Prisma.DrugFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrugFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          findMany: {
            args: Prisma.DrugFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>[]
          }
          create: {
            args: Prisma.DrugCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          createMany: {
            args: Prisma.DrugCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrugCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>[]
          }
          delete: {
            args: Prisma.DrugDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          update: {
            args: Prisma.DrugUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          deleteMany: {
            args: Prisma.DrugDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrugUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrugUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>[]
          }
          upsert: {
            args: Prisma.DrugUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          aggregate: {
            args: Prisma.DrugAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrug>
          }
          groupBy: {
            args: Prisma.DrugGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrugGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrugCountArgs<ExtArgs>
            result: $Utils.Optional<DrugCountAggregateOutputType> | number
          }
        }
      }
      Chunk: {
        payload: Prisma.$ChunkPayload<ExtArgs>
        fields: Prisma.ChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          findFirst: {
            args: Prisma.ChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          findMany: {
            args: Prisma.ChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>[]
          }
          create: {
            args: Prisma.ChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          createMany: {
            args: Prisma.ChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>[]
          }
          delete: {
            args: Prisma.ChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          update: {
            args: Prisma.ChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          deleteMany: {
            args: Prisma.ChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>[]
          }
          upsert: {
            args: Prisma.ChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          aggregate: {
            args: Prisma.ChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChunk>
          }
          groupBy: {
            args: Prisma.ChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChunkCountArgs<ExtArgs>
            result: $Utils.Optional<ChunkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    drug?: DrugOmit
    chunk?: ChunkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type DrugCountOutputType
   */

  export type DrugCountOutputType = {
    chunks: number
  }

  export type DrugCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | DrugCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes
  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrugCountOutputType
     */
    select?: DrugCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChunkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Drug
   */

  export type AggregateDrug = {
    _count: DrugCountAggregateOutputType | null
    _min: DrugMinAggregateOutputType | null
    _max: DrugMaxAggregateOutputType | null
  }

  export type DrugMinAggregateOutputType = {
    id: string | null
    genericName: string | null
    brandName: string | null
    substanceName: string | null
    pharmClassEpc: string | null
    route: string | null
    manufacturerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrugMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
    brandName: string | null
    substanceName: string | null
    pharmClassEpc: string | null
    route: string | null
    manufacturerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrugCountAggregateOutputType = {
    id: number
    genericName: number
    brandName: number
    substanceName: number
    pharmClassEpc: number
    rxcui: number
    route: number
    manufacturerName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrugMinAggregateInputType = {
    id?: true
    genericName?: true
    brandName?: true
    substanceName?: true
    pharmClassEpc?: true
    route?: true
    manufacturerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrugMaxAggregateInputType = {
    id?: true
    genericName?: true
    brandName?: true
    substanceName?: true
    pharmClassEpc?: true
    route?: true
    manufacturerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrugCountAggregateInputType = {
    id?: true
    genericName?: true
    brandName?: true
    substanceName?: true
    pharmClassEpc?: true
    rxcui?: true
    route?: true
    manufacturerName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DrugAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drug to aggregate.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drugs
    **/
    _count?: true | DrugCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrugMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrugMaxAggregateInputType
  }

  export type GetDrugAggregateType<T extends DrugAggregateArgs> = {
        [P in keyof T & keyof AggregateDrug]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrug[P]>
      : GetScalarType<T[P], AggregateDrug[P]>
  }




  export type DrugGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrugWhereInput
    orderBy?: DrugOrderByWithAggregationInput | DrugOrderByWithAggregationInput[]
    by: DrugScalarFieldEnum[] | DrugScalarFieldEnum
    having?: DrugScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrugCountAggregateInputType | true
    _min?: DrugMinAggregateInputType
    _max?: DrugMaxAggregateInputType
  }

  export type DrugGroupByOutputType = {
    id: string
    genericName: string | null
    brandName: string | null
    substanceName: string | null
    pharmClassEpc: string | null
    rxcui: string[]
    route: string | null
    manufacturerName: string | null
    createdAt: Date
    updatedAt: Date
    _count: DrugCountAggregateOutputType | null
    _min: DrugMinAggregateOutputType | null
    _max: DrugMaxAggregateOutputType | null
  }

  type GetDrugGroupByPayload<T extends DrugGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrugGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrugGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrugGroupByOutputType[P]>
            : GetScalarType<T[P], DrugGroupByOutputType[P]>
        }
      >
    >


  export type DrugSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    brandName?: boolean
    substanceName?: boolean
    pharmClassEpc?: boolean
    rxcui?: boolean
    route?: boolean
    manufacturerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chunks?: boolean | Drug$chunksArgs<ExtArgs>
    _count?: boolean | DrugCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drug"]>

  export type DrugSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    brandName?: boolean
    substanceName?: boolean
    pharmClassEpc?: boolean
    rxcui?: boolean
    route?: boolean
    manufacturerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["drug"]>

  export type DrugSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    brandName?: boolean
    substanceName?: boolean
    pharmClassEpc?: boolean
    rxcui?: boolean
    route?: boolean
    manufacturerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["drug"]>

  export type DrugSelectScalar = {
    id?: boolean
    genericName?: boolean
    brandName?: boolean
    substanceName?: boolean
    pharmClassEpc?: boolean
    rxcui?: boolean
    route?: boolean
    manufacturerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DrugOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName" | "brandName" | "substanceName" | "pharmClassEpc" | "rxcui" | "route" | "manufacturerName" | "createdAt" | "updatedAt", ExtArgs["result"]["drug"]>
  export type DrugInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | Drug$chunksArgs<ExtArgs>
    _count?: boolean | DrugCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrugIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DrugIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DrugPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drug"
    objects: {
      chunks: Prisma.$ChunkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string | null
      brandName: string | null
      substanceName: string | null
      pharmClassEpc: string | null
      rxcui: string[]
      route: string | null
      manufacturerName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drug"]>
    composites: {}
  }

  type DrugGetPayload<S extends boolean | null | undefined | DrugDefaultArgs> = $Result.GetResult<Prisma.$DrugPayload, S>

  type DrugCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrugFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrugCountAggregateInputType | true
    }

  export interface DrugDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drug'], meta: { name: 'Drug' } }
    /**
     * Find zero or one Drug that matches the filter.
     * @param {DrugFindUniqueArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrugFindUniqueArgs>(args: SelectSubset<T, DrugFindUniqueArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drug that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrugFindUniqueOrThrowArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrugFindUniqueOrThrowArgs>(args: SelectSubset<T, DrugFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drug that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugFindFirstArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrugFindFirstArgs>(args?: SelectSubset<T, DrugFindFirstArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drug that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugFindFirstOrThrowArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrugFindFirstOrThrowArgs>(args?: SelectSubset<T, DrugFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drugs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drugs
     * const drugs = await prisma.drug.findMany()
     * 
     * // Get first 10 Drugs
     * const drugs = await prisma.drug.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drugWithIdOnly = await prisma.drug.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrugFindManyArgs>(args?: SelectSubset<T, DrugFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drug.
     * @param {DrugCreateArgs} args - Arguments to create a Drug.
     * @example
     * // Create one Drug
     * const Drug = await prisma.drug.create({
     *   data: {
     *     // ... data to create a Drug
     *   }
     * })
     * 
     */
    create<T extends DrugCreateArgs>(args: SelectSubset<T, DrugCreateArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drugs.
     * @param {DrugCreateManyArgs} args - Arguments to create many Drugs.
     * @example
     * // Create many Drugs
     * const drug = await prisma.drug.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrugCreateManyArgs>(args?: SelectSubset<T, DrugCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drugs and returns the data saved in the database.
     * @param {DrugCreateManyAndReturnArgs} args - Arguments to create many Drugs.
     * @example
     * // Create many Drugs
     * const drug = await prisma.drug.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drugs and only return the `id`
     * const drugWithIdOnly = await prisma.drug.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrugCreateManyAndReturnArgs>(args?: SelectSubset<T, DrugCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drug.
     * @param {DrugDeleteArgs} args - Arguments to delete one Drug.
     * @example
     * // Delete one Drug
     * const Drug = await prisma.drug.delete({
     *   where: {
     *     // ... filter to delete one Drug
     *   }
     * })
     * 
     */
    delete<T extends DrugDeleteArgs>(args: SelectSubset<T, DrugDeleteArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drug.
     * @param {DrugUpdateArgs} args - Arguments to update one Drug.
     * @example
     * // Update one Drug
     * const drug = await prisma.drug.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrugUpdateArgs>(args: SelectSubset<T, DrugUpdateArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drugs.
     * @param {DrugDeleteManyArgs} args - Arguments to filter Drugs to delete.
     * @example
     * // Delete a few Drugs
     * const { count } = await prisma.drug.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrugDeleteManyArgs>(args?: SelectSubset<T, DrugDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drugs
     * const drug = await prisma.drug.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrugUpdateManyArgs>(args: SelectSubset<T, DrugUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drugs and returns the data updated in the database.
     * @param {DrugUpdateManyAndReturnArgs} args - Arguments to update many Drugs.
     * @example
     * // Update many Drugs
     * const drug = await prisma.drug.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drugs and only return the `id`
     * const drugWithIdOnly = await prisma.drug.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrugUpdateManyAndReturnArgs>(args: SelectSubset<T, DrugUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drug.
     * @param {DrugUpsertArgs} args - Arguments to update or create a Drug.
     * @example
     * // Update or create a Drug
     * const drug = await prisma.drug.upsert({
     *   create: {
     *     // ... data to create a Drug
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drug we want to update
     *   }
     * })
     */
    upsert<T extends DrugUpsertArgs>(args: SelectSubset<T, DrugUpsertArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugCountArgs} args - Arguments to filter Drugs to count.
     * @example
     * // Count the number of Drugs
     * const count = await prisma.drug.count({
     *   where: {
     *     // ... the filter for the Drugs we want to count
     *   }
     * })
    **/
    count<T extends DrugCountArgs>(
      args?: Subset<T, DrugCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrugCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrugAggregateArgs>(args: Subset<T, DrugAggregateArgs>): Prisma.PrismaPromise<GetDrugAggregateType<T>>

    /**
     * Group by Drug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugGroupByArgs} args - Group by arguments.
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
      T extends DrugGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrugGroupByArgs['orderBy'] }
        : { orderBy?: DrugGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrugGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrugGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drug model
   */
  readonly fields: DrugFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drug.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrugClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chunks<T extends Drug$chunksArgs<ExtArgs> = {}>(args?: Subset<T, Drug$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drug model
   */
  interface DrugFieldRefs {
    readonly id: FieldRef<"Drug", 'String'>
    readonly genericName: FieldRef<"Drug", 'String'>
    readonly brandName: FieldRef<"Drug", 'String'>
    readonly substanceName: FieldRef<"Drug", 'String'>
    readonly pharmClassEpc: FieldRef<"Drug", 'String'>
    readonly rxcui: FieldRef<"Drug", 'String[]'>
    readonly route: FieldRef<"Drug", 'String'>
    readonly manufacturerName: FieldRef<"Drug", 'String'>
    readonly createdAt: FieldRef<"Drug", 'DateTime'>
    readonly updatedAt: FieldRef<"Drug", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drug findUnique
   */
  export type DrugFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug findUniqueOrThrow
   */
  export type DrugFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug findFirst
   */
  export type DrugFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drugs.
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drugs.
     */
    distinct?: DrugScalarFieldEnum | DrugScalarFieldEnum[]
  }

  /**
   * Drug findFirstOrThrow
   */
  export type DrugFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drugs.
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drugs.
     */
    distinct?: DrugScalarFieldEnum | DrugScalarFieldEnum[]
  }

  /**
   * Drug findMany
   */
  export type DrugFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drugs to fetch.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drugs.
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drugs.
     */
    distinct?: DrugScalarFieldEnum | DrugScalarFieldEnum[]
  }

  /**
   * Drug create
   */
  export type DrugCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * The data needed to create a Drug.
     */
    data: XOR<DrugCreateInput, DrugUncheckedCreateInput>
  }

  /**
   * Drug createMany
   */
  export type DrugCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drugs.
     */
    data: DrugCreateManyInput | DrugCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drug createManyAndReturn
   */
  export type DrugCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * The data used to create many Drugs.
     */
    data: DrugCreateManyInput | DrugCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drug update
   */
  export type DrugUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * The data needed to update a Drug.
     */
    data: XOR<DrugUpdateInput, DrugUncheckedUpdateInput>
    /**
     * Choose, which Drug to update.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug updateMany
   */
  export type DrugUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drugs.
     */
    data: XOR<DrugUpdateManyMutationInput, DrugUncheckedUpdateManyInput>
    /**
     * Filter which Drugs to update
     */
    where?: DrugWhereInput
    /**
     * Limit how many Drugs to update.
     */
    limit?: number
  }

  /**
   * Drug updateManyAndReturn
   */
  export type DrugUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * The data used to update Drugs.
     */
    data: XOR<DrugUpdateManyMutationInput, DrugUncheckedUpdateManyInput>
    /**
     * Filter which Drugs to update
     */
    where?: DrugWhereInput
    /**
     * Limit how many Drugs to update.
     */
    limit?: number
  }

  /**
   * Drug upsert
   */
  export type DrugUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * The filter to search for the Drug to update in case it exists.
     */
    where: DrugWhereUniqueInput
    /**
     * In case the Drug found by the `where` argument doesn't exist, create a new Drug with this data.
     */
    create: XOR<DrugCreateInput, DrugUncheckedCreateInput>
    /**
     * In case the Drug was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrugUpdateInput, DrugUncheckedUpdateInput>
  }

  /**
   * Drug delete
   */
  export type DrugDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter which Drug to delete.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug deleteMany
   */
  export type DrugDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drugs to delete
     */
    where?: DrugWhereInput
    /**
     * Limit how many Drugs to delete.
     */
    limit?: number
  }

  /**
   * Drug.chunks
   */
  export type Drug$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    where?: ChunkWhereInput
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    cursor?: ChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Drug without action
   */
  export type DrugDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
  }


  /**
   * Model Chunk
   */

  export type AggregateChunk = {
    _count: ChunkCountAggregateOutputType | null
    _avg: ChunkAvgAggregateOutputType | null
    _sum: ChunkSumAggregateOutputType | null
    _min: ChunkMinAggregateOutputType | null
    _max: ChunkMaxAggregateOutputType | null
  }

  export type ChunkAvgAggregateOutputType = {
    id: number | null
  }

  export type ChunkSumAggregateOutputType = {
    id: number | null
  }

  export type ChunkMinAggregateOutputType = {
    id: number | null
    content: string | null
    section: string | null
    sourceField: string | null
    drugId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChunkMaxAggregateOutputType = {
    id: number | null
    content: string | null
    section: string | null
    sourceField: string | null
    drugId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChunkCountAggregateOutputType = {
    id: number
    content: number
    section: number
    sourceField: number
    drugId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChunkAvgAggregateInputType = {
    id?: true
  }

  export type ChunkSumAggregateInputType = {
    id?: true
  }

  export type ChunkMinAggregateInputType = {
    id?: true
    content?: true
    section?: true
    sourceField?: true
    drugId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChunkMaxAggregateInputType = {
    id?: true
    content?: true
    section?: true
    sourceField?: true
    drugId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChunkCountAggregateInputType = {
    id?: true
    content?: true
    section?: true
    sourceField?: true
    drugId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chunk to aggregate.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chunks
    **/
    _count?: true | ChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChunkMaxAggregateInputType
  }

  export type GetChunkAggregateType<T extends ChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChunk[P]>
      : GetScalarType<T[P], AggregateChunk[P]>
  }




  export type ChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChunkWhereInput
    orderBy?: ChunkOrderByWithAggregationInput | ChunkOrderByWithAggregationInput[]
    by: ChunkScalarFieldEnum[] | ChunkScalarFieldEnum
    having?: ChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChunkCountAggregateInputType | true
    _avg?: ChunkAvgAggregateInputType
    _sum?: ChunkSumAggregateInputType
    _min?: ChunkMinAggregateInputType
    _max?: ChunkMaxAggregateInputType
  }

  export type ChunkGroupByOutputType = {
    id: number
    content: string
    section: string
    sourceField: string | null
    drugId: string
    createdAt: Date
    updatedAt: Date
    _count: ChunkCountAggregateOutputType | null
    _avg: ChunkAvgAggregateOutputType | null
    _sum: ChunkSumAggregateOutputType | null
    _min: ChunkMinAggregateOutputType | null
    _max: ChunkMaxAggregateOutputType | null
  }

  type GetChunkGroupByPayload<T extends ChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChunkGroupByOutputType[P]>
            : GetScalarType<T[P], ChunkGroupByOutputType[P]>
        }
      >
    >


  export type ChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    section?: boolean
    sourceField?: boolean
    drugId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chunk"]>

  export type ChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    section?: boolean
    sourceField?: boolean
    drugId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chunk"]>

  export type ChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    section?: boolean
    sourceField?: boolean
    drugId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chunk"]>

  export type ChunkSelectScalar = {
    id?: boolean
    content?: boolean
    section?: boolean
    sourceField?: boolean
    drugId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "section" | "sourceField" | "drugId" | "createdAt" | "updatedAt", ExtArgs["result"]["chunk"]>
  export type ChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }
  export type ChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }
  export type ChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }

  export type $ChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chunk"
    objects: {
      drug: Prisma.$DrugPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      section: string
      sourceField: string | null
      drugId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chunk"]>
    composites: {}
  }

  type ChunkGetPayload<S extends boolean | null | undefined | ChunkDefaultArgs> = $Result.GetResult<Prisma.$ChunkPayload, S>

  type ChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChunkCountAggregateInputType | true
    }

  export interface ChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chunk'], meta: { name: 'Chunk' } }
    /**
     * Find zero or one Chunk that matches the filter.
     * @param {ChunkFindUniqueArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChunkFindUniqueArgs>(args: SelectSubset<T, ChunkFindUniqueArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChunkFindUniqueOrThrowArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, ChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkFindFirstArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChunkFindFirstArgs>(args?: SelectSubset<T, ChunkFindFirstArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkFindFirstOrThrowArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, ChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chunks
     * const chunks = await prisma.chunk.findMany()
     * 
     * // Get first 10 Chunks
     * const chunks = await prisma.chunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chunkWithIdOnly = await prisma.chunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChunkFindManyArgs>(args?: SelectSubset<T, ChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chunk.
     * @param {ChunkCreateArgs} args - Arguments to create a Chunk.
     * @example
     * // Create one Chunk
     * const Chunk = await prisma.chunk.create({
     *   data: {
     *     // ... data to create a Chunk
     *   }
     * })
     * 
     */
    create<T extends ChunkCreateArgs>(args: SelectSubset<T, ChunkCreateArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chunks.
     * @param {ChunkCreateManyArgs} args - Arguments to create many Chunks.
     * @example
     * // Create many Chunks
     * const chunk = await prisma.chunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChunkCreateManyArgs>(args?: SelectSubset<T, ChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chunks and returns the data saved in the database.
     * @param {ChunkCreateManyAndReturnArgs} args - Arguments to create many Chunks.
     * @example
     * // Create many Chunks
     * const chunk = await prisma.chunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chunks and only return the `id`
     * const chunkWithIdOnly = await prisma.chunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, ChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chunk.
     * @param {ChunkDeleteArgs} args - Arguments to delete one Chunk.
     * @example
     * // Delete one Chunk
     * const Chunk = await prisma.chunk.delete({
     *   where: {
     *     // ... filter to delete one Chunk
     *   }
     * })
     * 
     */
    delete<T extends ChunkDeleteArgs>(args: SelectSubset<T, ChunkDeleteArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chunk.
     * @param {ChunkUpdateArgs} args - Arguments to update one Chunk.
     * @example
     * // Update one Chunk
     * const chunk = await prisma.chunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChunkUpdateArgs>(args: SelectSubset<T, ChunkUpdateArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chunks.
     * @param {ChunkDeleteManyArgs} args - Arguments to filter Chunks to delete.
     * @example
     * // Delete a few Chunks
     * const { count } = await prisma.chunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChunkDeleteManyArgs>(args?: SelectSubset<T, ChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chunks
     * const chunk = await prisma.chunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChunkUpdateManyArgs>(args: SelectSubset<T, ChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chunks and returns the data updated in the database.
     * @param {ChunkUpdateManyAndReturnArgs} args - Arguments to update many Chunks.
     * @example
     * // Update many Chunks
     * const chunk = await prisma.chunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chunks and only return the `id`
     * const chunkWithIdOnly = await prisma.chunk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, ChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chunk.
     * @param {ChunkUpsertArgs} args - Arguments to update or create a Chunk.
     * @example
     * // Update or create a Chunk
     * const chunk = await prisma.chunk.upsert({
     *   create: {
     *     // ... data to create a Chunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chunk we want to update
     *   }
     * })
     */
    upsert<T extends ChunkUpsertArgs>(args: SelectSubset<T, ChunkUpsertArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkCountArgs} args - Arguments to filter Chunks to count.
     * @example
     * // Count the number of Chunks
     * const count = await prisma.chunk.count({
     *   where: {
     *     // ... the filter for the Chunks we want to count
     *   }
     * })
    **/
    count<T extends ChunkCountArgs>(
      args?: Subset<T, ChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChunkAggregateArgs>(args: Subset<T, ChunkAggregateArgs>): Prisma.PrismaPromise<GetChunkAggregateType<T>>

    /**
     * Group by Chunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkGroupByArgs} args - Group by arguments.
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
      T extends ChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChunkGroupByArgs['orderBy'] }
        : { orderBy?: ChunkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chunk model
   */
  readonly fields: ChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drug<T extends DrugDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrugDefaultArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chunk model
   */
  interface ChunkFieldRefs {
    readonly id: FieldRef<"Chunk", 'Int'>
    readonly content: FieldRef<"Chunk", 'String'>
    readonly section: FieldRef<"Chunk", 'String'>
    readonly sourceField: FieldRef<"Chunk", 'String'>
    readonly drugId: FieldRef<"Chunk", 'String'>
    readonly createdAt: FieldRef<"Chunk", 'DateTime'>
    readonly updatedAt: FieldRef<"Chunk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chunk findUnique
   */
  export type ChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk findUniqueOrThrow
   */
  export type ChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk findFirst
   */
  export type ChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chunks.
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chunks.
     */
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Chunk findFirstOrThrow
   */
  export type ChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chunks.
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chunks.
     */
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Chunk findMany
   */
  export type ChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunks to fetch.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chunks.
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chunks.
     */
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Chunk create
   */
  export type ChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a Chunk.
     */
    data: XOR<ChunkCreateInput, ChunkUncheckedCreateInput>
  }

  /**
   * Chunk createMany
   */
  export type ChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chunks.
     */
    data: ChunkCreateManyInput | ChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chunk createManyAndReturn
   */
  export type ChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * The data used to create many Chunks.
     */
    data: ChunkCreateManyInput | ChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chunk update
   */
  export type ChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a Chunk.
     */
    data: XOR<ChunkUpdateInput, ChunkUncheckedUpdateInput>
    /**
     * Choose, which Chunk to update.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk updateMany
   */
  export type ChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chunks.
     */
    data: XOR<ChunkUpdateManyMutationInput, ChunkUncheckedUpdateManyInput>
    /**
     * Filter which Chunks to update
     */
    where?: ChunkWhereInput
    /**
     * Limit how many Chunks to update.
     */
    limit?: number
  }

  /**
   * Chunk updateManyAndReturn
   */
  export type ChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * The data used to update Chunks.
     */
    data: XOR<ChunkUpdateManyMutationInput, ChunkUncheckedUpdateManyInput>
    /**
     * Filter which Chunks to update
     */
    where?: ChunkWhereInput
    /**
     * Limit how many Chunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chunk upsert
   */
  export type ChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the Chunk to update in case it exists.
     */
    where: ChunkWhereUniqueInput
    /**
     * In case the Chunk found by the `where` argument doesn't exist, create a new Chunk with this data.
     */
    create: XOR<ChunkCreateInput, ChunkUncheckedCreateInput>
    /**
     * In case the Chunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChunkUpdateInput, ChunkUncheckedUpdateInput>
  }

  /**
   * Chunk delete
   */
  export type ChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter which Chunk to delete.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk deleteMany
   */
  export type ChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chunks to delete
     */
    where?: ChunkWhereInput
    /**
     * Limit how many Chunks to delete.
     */
    limit?: number
  }

  /**
   * Chunk without action
   */
  export type ChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
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


  export const DrugScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    brandName: 'brandName',
    substanceName: 'substanceName',
    pharmClassEpc: 'pharmClassEpc',
    rxcui: 'rxcui',
    route: 'route',
    manufacturerName: 'manufacturerName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DrugScalarFieldEnum = (typeof DrugScalarFieldEnum)[keyof typeof DrugScalarFieldEnum]


  export const ChunkScalarFieldEnum: {
    id: 'id',
    content: 'content',
    section: 'section',
    sourceField: 'sourceField',
    drugId: 'drugId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChunkScalarFieldEnum = (typeof ChunkScalarFieldEnum)[keyof typeof ChunkScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type DrugWhereInput = {
    AND?: DrugWhereInput | DrugWhereInput[]
    OR?: DrugWhereInput[]
    NOT?: DrugWhereInput | DrugWhereInput[]
    id?: StringFilter<"Drug"> | string
    genericName?: StringNullableFilter<"Drug"> | string | null
    brandName?: StringNullableFilter<"Drug"> | string | null
    substanceName?: StringNullableFilter<"Drug"> | string | null
    pharmClassEpc?: StringNullableFilter<"Drug"> | string | null
    rxcui?: StringNullableListFilter<"Drug">
    route?: StringNullableFilter<"Drug"> | string | null
    manufacturerName?: StringNullableFilter<"Drug"> | string | null
    createdAt?: DateTimeFilter<"Drug"> | Date | string
    updatedAt?: DateTimeFilter<"Drug"> | Date | string
    chunks?: ChunkListRelationFilter
  }

  export type DrugOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrderInput | SortOrder
    brandName?: SortOrderInput | SortOrder
    substanceName?: SortOrderInput | SortOrder
    pharmClassEpc?: SortOrderInput | SortOrder
    rxcui?: SortOrder
    route?: SortOrderInput | SortOrder
    manufacturerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chunks?: ChunkOrderByRelationAggregateInput
  }

  export type DrugWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrugWhereInput | DrugWhereInput[]
    OR?: DrugWhereInput[]
    NOT?: DrugWhereInput | DrugWhereInput[]
    genericName?: StringNullableFilter<"Drug"> | string | null
    brandName?: StringNullableFilter<"Drug"> | string | null
    substanceName?: StringNullableFilter<"Drug"> | string | null
    pharmClassEpc?: StringNullableFilter<"Drug"> | string | null
    rxcui?: StringNullableListFilter<"Drug">
    route?: StringNullableFilter<"Drug"> | string | null
    manufacturerName?: StringNullableFilter<"Drug"> | string | null
    createdAt?: DateTimeFilter<"Drug"> | Date | string
    updatedAt?: DateTimeFilter<"Drug"> | Date | string
    chunks?: ChunkListRelationFilter
  }, "id">

  export type DrugOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrderInput | SortOrder
    brandName?: SortOrderInput | SortOrder
    substanceName?: SortOrderInput | SortOrder
    pharmClassEpc?: SortOrderInput | SortOrder
    rxcui?: SortOrder
    route?: SortOrderInput | SortOrder
    manufacturerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DrugCountOrderByAggregateInput
    _max?: DrugMaxOrderByAggregateInput
    _min?: DrugMinOrderByAggregateInput
  }

  export type DrugScalarWhereWithAggregatesInput = {
    AND?: DrugScalarWhereWithAggregatesInput | DrugScalarWhereWithAggregatesInput[]
    OR?: DrugScalarWhereWithAggregatesInput[]
    NOT?: DrugScalarWhereWithAggregatesInput | DrugScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drug"> | string
    genericName?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    brandName?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    substanceName?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    pharmClassEpc?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    rxcui?: StringNullableListFilter<"Drug">
    route?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    manufacturerName?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Drug"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drug"> | Date | string
  }

  export type ChunkWhereInput = {
    AND?: ChunkWhereInput | ChunkWhereInput[]
    OR?: ChunkWhereInput[]
    NOT?: ChunkWhereInput | ChunkWhereInput[]
    id?: IntFilter<"Chunk"> | number
    content?: StringFilter<"Chunk"> | string
    section?: StringFilter<"Chunk"> | string
    sourceField?: StringNullableFilter<"Chunk"> | string | null
    drugId?: StringFilter<"Chunk"> | string
    createdAt?: DateTimeFilter<"Chunk"> | Date | string
    updatedAt?: DateTimeFilter<"Chunk"> | Date | string
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }

  export type ChunkOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    section?: SortOrder
    sourceField?: SortOrderInput | SortOrder
    drugId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drug?: DrugOrderByWithRelationInput
  }

  export type ChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChunkWhereInput | ChunkWhereInput[]
    OR?: ChunkWhereInput[]
    NOT?: ChunkWhereInput | ChunkWhereInput[]
    content?: StringFilter<"Chunk"> | string
    section?: StringFilter<"Chunk"> | string
    sourceField?: StringNullableFilter<"Chunk"> | string | null
    drugId?: StringFilter<"Chunk"> | string
    createdAt?: DateTimeFilter<"Chunk"> | Date | string
    updatedAt?: DateTimeFilter<"Chunk"> | Date | string
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }, "id">

  export type ChunkOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    section?: SortOrder
    sourceField?: SortOrderInput | SortOrder
    drugId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChunkCountOrderByAggregateInput
    _avg?: ChunkAvgOrderByAggregateInput
    _max?: ChunkMaxOrderByAggregateInput
    _min?: ChunkMinOrderByAggregateInput
    _sum?: ChunkSumOrderByAggregateInput
  }

  export type ChunkScalarWhereWithAggregatesInput = {
    AND?: ChunkScalarWhereWithAggregatesInput | ChunkScalarWhereWithAggregatesInput[]
    OR?: ChunkScalarWhereWithAggregatesInput[]
    NOT?: ChunkScalarWhereWithAggregatesInput | ChunkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chunk"> | number
    content?: StringWithAggregatesFilter<"Chunk"> | string
    section?: StringWithAggregatesFilter<"Chunk"> | string
    sourceField?: StringNullableWithAggregatesFilter<"Chunk"> | string | null
    drugId?: StringWithAggregatesFilter<"Chunk"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chunk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chunk"> | Date | string
  }

  export type DrugCreateInput = {
    id: string
    genericName?: string | null
    brandName?: string | null
    substanceName?: string | null
    pharmClassEpc?: string | null
    rxcui?: DrugCreaterxcuiInput | string[]
    route?: string | null
    manufacturerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: ChunkCreateNestedManyWithoutDrugInput
  }

  export type DrugUncheckedCreateInput = {
    id: string
    genericName?: string | null
    brandName?: string | null
    substanceName?: string | null
    pharmClassEpc?: string | null
    rxcui?: DrugCreaterxcuiInput | string[]
    route?: string | null
    manufacturerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: ChunkUncheckedCreateNestedManyWithoutDrugInput
  }

  export type DrugUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    substanceName?: NullableStringFieldUpdateOperationsInput | string | null
    pharmClassEpc?: NullableStringFieldUpdateOperationsInput | string | null
    rxcui?: DrugUpdaterxcuiInput | string[]
    route?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: ChunkUpdateManyWithoutDrugNestedInput
  }

  export type DrugUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    substanceName?: NullableStringFieldUpdateOperationsInput | string | null
    pharmClassEpc?: NullableStringFieldUpdateOperationsInput | string | null
    rxcui?: DrugUpdaterxcuiInput | string[]
    route?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: ChunkUncheckedUpdateManyWithoutDrugNestedInput
  }

  export type DrugCreateManyInput = {
    id: string
    genericName?: string | null
    brandName?: string | null
    substanceName?: string | null
    pharmClassEpc?: string | null
    rxcui?: DrugCreaterxcuiInput | string[]
    route?: string | null
    manufacturerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrugUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    substanceName?: NullableStringFieldUpdateOperationsInput | string | null
    pharmClassEpc?: NullableStringFieldUpdateOperationsInput | string | null
    rxcui?: DrugUpdaterxcuiInput | string[]
    route?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrugUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    substanceName?: NullableStringFieldUpdateOperationsInput | string | null
    pharmClassEpc?: NullableStringFieldUpdateOperationsInput | string | null
    rxcui?: DrugUpdaterxcuiInput | string[]
    route?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkCreateInput = {
    content: string
    section: string
    sourceField?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drug: DrugCreateNestedOneWithoutChunksInput
  }

  export type ChunkUncheckedCreateInput = {
    id?: number
    content: string
    section: string
    sourceField?: string | null
    drugId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChunkUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    sourceField?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drug?: DrugUpdateOneRequiredWithoutChunksNestedInput
  }

  export type ChunkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    sourceField?: NullableStringFieldUpdateOperationsInput | string | null
    drugId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkCreateManyInput = {
    id?: number
    content: string
    section: string
    sourceField?: string | null
    drugId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChunkUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    sourceField?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    sourceField?: NullableStringFieldUpdateOperationsInput | string | null
    drugId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChunkListRelationFilter = {
    every?: ChunkWhereInput
    some?: ChunkWhereInput
    none?: ChunkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrugCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandName?: SortOrder
    substanceName?: SortOrder
    pharmClassEpc?: SortOrder
    rxcui?: SortOrder
    route?: SortOrder
    manufacturerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrugMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandName?: SortOrder
    substanceName?: SortOrder
    pharmClassEpc?: SortOrder
    route?: SortOrder
    manufacturerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrugMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    brandName?: SortOrder
    substanceName?: SortOrder
    pharmClassEpc?: SortOrder
    route?: SortOrder
    manufacturerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type DrugScalarRelationFilter = {
    is?: DrugWhereInput
    isNot?: DrugWhereInput
  }

  export type ChunkCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    section?: SortOrder
    sourceField?: SortOrder
    drugId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChunkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    section?: SortOrder
    sourceField?: SortOrder
    drugId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChunkMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    section?: SortOrder
    sourceField?: SortOrder
    drugId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChunkSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DrugCreaterxcuiInput = {
    set: string[]
  }

  export type ChunkCreateNestedManyWithoutDrugInput = {
    create?: XOR<ChunkCreateWithoutDrugInput, ChunkUncheckedCreateWithoutDrugInput> | ChunkCreateWithoutDrugInput[] | ChunkUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDrugInput | ChunkCreateOrConnectWithoutDrugInput[]
    createMany?: ChunkCreateManyDrugInputEnvelope
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
  }

  export type ChunkUncheckedCreateNestedManyWithoutDrugInput = {
    create?: XOR<ChunkCreateWithoutDrugInput, ChunkUncheckedCreateWithoutDrugInput> | ChunkCreateWithoutDrugInput[] | ChunkUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDrugInput | ChunkCreateOrConnectWithoutDrugInput[]
    createMany?: ChunkCreateManyDrugInputEnvelope
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DrugUpdaterxcuiInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChunkUpdateManyWithoutDrugNestedInput = {
    create?: XOR<ChunkCreateWithoutDrugInput, ChunkUncheckedCreateWithoutDrugInput> | ChunkCreateWithoutDrugInput[] | ChunkUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDrugInput | ChunkCreateOrConnectWithoutDrugInput[]
    upsert?: ChunkUpsertWithWhereUniqueWithoutDrugInput | ChunkUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: ChunkCreateManyDrugInputEnvelope
    set?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    disconnect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    delete?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    update?: ChunkUpdateWithWhereUniqueWithoutDrugInput | ChunkUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: ChunkUpdateManyWithWhereWithoutDrugInput | ChunkUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
  }

  export type ChunkUncheckedUpdateManyWithoutDrugNestedInput = {
    create?: XOR<ChunkCreateWithoutDrugInput, ChunkUncheckedCreateWithoutDrugInput> | ChunkCreateWithoutDrugInput[] | ChunkUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDrugInput | ChunkCreateOrConnectWithoutDrugInput[]
    upsert?: ChunkUpsertWithWhereUniqueWithoutDrugInput | ChunkUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: ChunkCreateManyDrugInputEnvelope
    set?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    disconnect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    delete?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    update?: ChunkUpdateWithWhereUniqueWithoutDrugInput | ChunkUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: ChunkUpdateManyWithWhereWithoutDrugInput | ChunkUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
  }

  export type DrugCreateNestedOneWithoutChunksInput = {
    create?: XOR<DrugCreateWithoutChunksInput, DrugUncheckedCreateWithoutChunksInput>
    connectOrCreate?: DrugCreateOrConnectWithoutChunksInput
    connect?: DrugWhereUniqueInput
  }

  export type DrugUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<DrugCreateWithoutChunksInput, DrugUncheckedCreateWithoutChunksInput>
    connectOrCreate?: DrugCreateOrConnectWithoutChunksInput
    upsert?: DrugUpsertWithoutChunksInput
    connect?: DrugWhereUniqueInput
    update?: XOR<XOR<DrugUpdateToOneWithWhereWithoutChunksInput, DrugUpdateWithoutChunksInput>, DrugUncheckedUpdateWithoutChunksInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ChunkCreateWithoutDrugInput = {
    content: string
    section: string
    sourceField?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChunkUncheckedCreateWithoutDrugInput = {
    id?: number
    content: string
    section: string
    sourceField?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChunkCreateOrConnectWithoutDrugInput = {
    where: ChunkWhereUniqueInput
    create: XOR<ChunkCreateWithoutDrugInput, ChunkUncheckedCreateWithoutDrugInput>
  }

  export type ChunkCreateManyDrugInputEnvelope = {
    data: ChunkCreateManyDrugInput | ChunkCreateManyDrugInput[]
    skipDuplicates?: boolean
  }

  export type ChunkUpsertWithWhereUniqueWithoutDrugInput = {
    where: ChunkWhereUniqueInput
    update: XOR<ChunkUpdateWithoutDrugInput, ChunkUncheckedUpdateWithoutDrugInput>
    create: XOR<ChunkCreateWithoutDrugInput, ChunkUncheckedCreateWithoutDrugInput>
  }

  export type ChunkUpdateWithWhereUniqueWithoutDrugInput = {
    where: ChunkWhereUniqueInput
    data: XOR<ChunkUpdateWithoutDrugInput, ChunkUncheckedUpdateWithoutDrugInput>
  }

  export type ChunkUpdateManyWithWhereWithoutDrugInput = {
    where: ChunkScalarWhereInput
    data: XOR<ChunkUpdateManyMutationInput, ChunkUncheckedUpdateManyWithoutDrugInput>
  }

  export type ChunkScalarWhereInput = {
    AND?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
    OR?: ChunkScalarWhereInput[]
    NOT?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
    id?: IntFilter<"Chunk"> | number
    content?: StringFilter<"Chunk"> | string
    section?: StringFilter<"Chunk"> | string
    sourceField?: StringNullableFilter<"Chunk"> | string | null
    drugId?: StringFilter<"Chunk"> | string
    createdAt?: DateTimeFilter<"Chunk"> | Date | string
    updatedAt?: DateTimeFilter<"Chunk"> | Date | string
  }

  export type DrugCreateWithoutChunksInput = {
    id: string
    genericName?: string | null
    brandName?: string | null
    substanceName?: string | null
    pharmClassEpc?: string | null
    rxcui?: DrugCreaterxcuiInput | string[]
    route?: string | null
    manufacturerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrugUncheckedCreateWithoutChunksInput = {
    id: string
    genericName?: string | null
    brandName?: string | null
    substanceName?: string | null
    pharmClassEpc?: string | null
    rxcui?: DrugCreaterxcuiInput | string[]
    route?: string | null
    manufacturerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrugCreateOrConnectWithoutChunksInput = {
    where: DrugWhereUniqueInput
    create: XOR<DrugCreateWithoutChunksInput, DrugUncheckedCreateWithoutChunksInput>
  }

  export type DrugUpsertWithoutChunksInput = {
    update: XOR<DrugUpdateWithoutChunksInput, DrugUncheckedUpdateWithoutChunksInput>
    create: XOR<DrugCreateWithoutChunksInput, DrugUncheckedCreateWithoutChunksInput>
    where?: DrugWhereInput
  }

  export type DrugUpdateToOneWithWhereWithoutChunksInput = {
    where?: DrugWhereInput
    data: XOR<DrugUpdateWithoutChunksInput, DrugUncheckedUpdateWithoutChunksInput>
  }

  export type DrugUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    substanceName?: NullableStringFieldUpdateOperationsInput | string | null
    pharmClassEpc?: NullableStringFieldUpdateOperationsInput | string | null
    rxcui?: DrugUpdaterxcuiInput | string[]
    route?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrugUncheckedUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    substanceName?: NullableStringFieldUpdateOperationsInput | string | null
    pharmClassEpc?: NullableStringFieldUpdateOperationsInput | string | null
    rxcui?: DrugUpdaterxcuiInput | string[]
    route?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkCreateManyDrugInput = {
    id?: number
    content: string
    section: string
    sourceField?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChunkUpdateWithoutDrugInput = {
    content?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    sourceField?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkUncheckedUpdateWithoutDrugInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    sourceField?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkUncheckedUpdateManyWithoutDrugInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    sourceField?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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