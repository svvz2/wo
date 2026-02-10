import { NextResponse } from "next/server";
import vm from "node:vm";

export async function POST(req: Request) {
  const body = await req.json();
  const userCode = body.code || "return 0";

  const sandbox = {};
  const context = vm.createContext(sandbox);

  const script = `
    (function(){
      try {
        const fn = new Function(${JSON.stringify(userCode)});
        return fn();
      } catch(e){
        return e.toString();
      }
    })()
  `;

  const result = vm.runInContext(script, context);

  return NextResponse.json({
    result
  });
}
