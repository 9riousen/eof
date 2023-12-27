import { _ as n, k as r, l as d, m as i, n as c, o as a, p as h, q as l, r as p, u as m, v as w, w as P } from "./main-a7cb6b7d.js";
class M {
  constructor(e) {
    n(this, "rpc", void 0), this.rpc = e, this.createPosition = this.createPosition.bind(this), this.withdrawPosition = this.withdrawPosition.bind(this), this.addToPosition = this.addToPosition.bind(this), this.collectSpreadRewards = this.collectSpreadRewards.bind(this), this.collectIncentives = this.collectIncentives.bind(this);
  }
  createPosition(e) {
    const s = r.encode(e).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CreatePosition", s).then((t) => d.decode(new i.Reader(t)));
  }
  withdrawPosition(e) {
    const s = c.encode(e).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "WithdrawPosition", s).then((t) => a.decode(new i.Reader(t)));
  }
  addToPosition(e) {
    const s = h.encode(e).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "AddToPosition", s).then((t) => l.decode(new i.Reader(t)));
  }
  collectSpreadRewards(e) {
    const s = p.encode(e).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectSpreadRewards", s).then((t) => m.decode(new i.Reader(t)));
  }
  collectIncentives(e) {
    const s = w.encode(e).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectIncentives", s).then((t) => P.decode(new i.Reader(t)));
  }
}
export {
  M as MsgClientImpl
};
