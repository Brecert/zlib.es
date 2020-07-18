import * as zlib from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.61.0/testing/asserts.ts";
import {
  RAW,
  UNCOMPRESSED,
  DYNAMIC,
  FIXED,
  CMP_BIN,
  RAW_BIN,
} from "./constants.ts";

Deno.test("UNCOMPRESSED", function () {
  assertEquals(
    RAW,
    zlib.inflate(UNCOMPRESSED),
  );
});

Deno.test("FIXED", function () {
  assertEquals(
    RAW,
    zlib.inflate(FIXED),
  );
});

Deno.test("DYNAMIC", function () {
  assertEquals(
    RAW,
    zlib.inflate(DYNAMIC),
  );
});

Deno.test("binary data", function () {
  assertEquals(
    RAW_BIN,
    zlib.inflate(CMP_BIN),
  );
});
