import { _ as r, M as n, j as s, m as a } from "./main-a7cb6b7d.js";
class l {
  constructor(e) {
    r(this, "rpc", void 0), this.rpc = e, this.createConcentratedPool = this.createConcentratedPool.bind(this);
  }
  createConcentratedPool(e) {
    const t = n.encode(e).finish();
    return this.rpc.request("osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.Msg", "CreateConcentratedPool", t).then((o) => s.decode(new a.Reader(o)));
  }
}
export {
  l as MsgClientImpl
};
