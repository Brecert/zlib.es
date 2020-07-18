import * as zlib from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.61.0/testing/asserts.ts";
import {
  RAW,
  RAW_BIN,
} from "./constants.ts";

Deno.test("Execution", function () {
  Deno.test("RAW", function () {
    zlib.deflate(RAW);
  });
  Deno.test("binary data", function () {
    zlib.deflate(RAW_BIN);
  });
});
Deno.test("Validation", function () {
  Deno.test("RAW", function () {
    const deflateOutput = zlib.deflate(RAW);
    assertEquals(
      RAW,
      zlib.inflate(deflateOutput),
    );
  });
  Deno.test("binary data", function () {
    const deflateOutput = zlib.deflate(RAW_BIN);
    assertEquals(
      RAW_BIN,
      zlib.inflate(deflateOutput),
    );
  });

  Deno.test("Repeat Length Limit", function () {
    const ascii =
      "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    let asciiRepeat = "";
    while (asciiRepeat.length < 1000) {
      asciiRepeat += ascii;
    }
    const encoder = new TextEncoder();
    const deflateInput = new Uint8Array(encoder.encode(asciiRepeat));
    const deflateOutput = zlib.deflate(deflateInput);
    assertEquals(
      deflateInput,
      zlib.inflate(deflateOutput),
    );
  });
});
