/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.0.3-alpha.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as agent from "../agent";
import type * as chat from "../chat";
import type * as conversation from "../conversation";
import type * as crons from "../crons";
import type * as engine from "../engine";
import type * as init from "../init";
import type * as lib_memory from "../lib/memory";
import type * as lib_migrations from "../lib/migrations";
import type * as lib_node_openai from "../lib/node_openai";
import type * as lib_openai from "../lib/openai";
import type * as lib_physics from "../lib/physics";
import type * as lib_pinecone from "../lib/pinecone";
import type * as lib_routing from "../lib/routing";
import type * as lib_utils from "../lib/utils";
import type * as players from "../players";
import type * as spritesheets_player from "../spritesheets/player";
import type * as testing from "../testing";
import type * as types from "../types";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  agent: typeof agent;
  chat: typeof chat;
  conversation: typeof conversation;
  crons: typeof crons;
  engine: typeof engine;
  init: typeof init;
  "lib/memory": typeof lib_memory;
  "lib/migrations": typeof lib_migrations;
  "lib/node_openai": typeof lib_node_openai;
  "lib/openai": typeof lib_openai;
  "lib/physics": typeof lib_physics;
  "lib/pinecone": typeof lib_pinecone;
  "lib/routing": typeof lib_routing;
  "lib/utils": typeof lib_utils;
  players: typeof players;
  "spritesheets/player": typeof spritesheets_player;
  testing: typeof testing;
  types: typeof types;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
