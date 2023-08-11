import { Table } from "./deps.ts";

export function makeTable(input: string): string {
    const lines = input.split("\n").filter((l) => l.trim());
    const header = lines.shift()!.split(",").map((h) => h.trim())
    //!は非NUll assertion shift()したものが先頭行を返して空のはずはないと仮定
    const body = lines.map((line) => line.split(",").map((l) => l.trim()));

    return new Table()
        .header(header)
        .body(body)
        .maxColWidth(15)
        .padding(1)
        .border(true)
        .toString();
}

