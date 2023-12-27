import { C as a, m as r, T as I, t as be, f as Me, L as s, D as u, a as J, P as l, b as c, A, c as K, d as V, e as Q, g as z, h as H, i as Ue, _ as Se } from "./main-a7cb6b7d.js";
function X() {
  return {
    positionId: s.UZERO,
    address: "",
    poolId: s.UZERO,
    lowerTick: s.ZERO,
    upperTick: s.ZERO,
    joinTime: void 0,
    liquidity: ""
  };
}
const f = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position",
  encode(e, i = r.Writer.create()) {
    return e.positionId.isZero() || i.uint32(8).uint64(e.positionId), e.address !== "" && i.uint32(18).string(e.address), e.poolId.isZero() || i.uint32(24).uint64(e.poolId), e.lowerTick.isZero() || i.uint32(32).int64(e.lowerTick), e.upperTick.isZero() || i.uint32(40).int64(e.upperTick), e.joinTime !== void 0 && I.encode(be(e.joinTime), i.uint32(50).fork()).ldelim(), e.liquidity !== "" && i.uint32(58).string(e.liquidity), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = X();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.positionId = o.uint64();
          break;
        case 2:
          n.address = o.string();
          break;
        case 3:
          n.poolId = o.uint64();
          break;
        case 4:
          n.lowerTick = o.int64();
          break;
        case 5:
          n.upperTick = o.int64();
          break;
        case 6:
          n.joinTime = Me(I.decode(o, o.uint32()));
          break;
        case 7:
          n.liquidity = o.string();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o, t;
    const n = X();
    return n.positionId = e.positionId !== void 0 && e.positionId !== null ? s.fromValue(e.positionId) : s.UZERO, n.address = (i = e.address) !== null && i !== void 0 ? i : "", n.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, n.lowerTick = e.lowerTick !== void 0 && e.lowerTick !== null ? s.fromValue(e.lowerTick) : s.ZERO, n.upperTick = e.upperTick !== void 0 && e.upperTick !== null ? s.fromValue(e.upperTick) : s.ZERO, n.joinTime = (o = e.joinTime) !== null && o !== void 0 ? o : void 0, n.liquidity = (t = e.liquidity) !== null && t !== void 0 ? t : "", n;
  },
  fromAmino(e) {
    return {
      positionId: s.fromString(e.position_id),
      address: e.address,
      poolId: s.fromString(e.pool_id),
      lowerTick: s.fromString(e.lower_tick),
      upperTick: s.fromString(e.upper_tick),
      joinTime: e != null && e.join_time ? I.fromAmino(e.join_time) : void 0,
      liquidity: e.liquidity
    };
  },
  toAmino(e) {
    const i = {};
    return i.position_id = e.positionId ? e.positionId.toString() : void 0, i.address = e.address, i.pool_id = e.poolId ? e.poolId.toString() : void 0, i.lower_tick = e.lowerTick ? e.lowerTick.toString() : void 0, i.upper_tick = e.upperTick ? e.upperTick.toString() : void 0, i.join_time = e.joinTime ? I.toAmino(e.joinTime) : void 0, i.liquidity = e.liquidity, i;
  },
  fromAminoMsg(e) {
    return f.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/position",
      value: f.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return f.decode(e.value);
  },
  toProto(e) {
    return f.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position",
      value: f.encode(e).finish()
    };
  }
};
function Y() {
  return {
    position: void 0,
    asset0: void 0,
    asset1: void 0,
    claimableSpreadRewards: [],
    claimableIncentives: [],
    forfeitedIncentives: []
  };
}
const m = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown",
  encode(e, i = r.Writer.create()) {
    e.position !== void 0 && f.encode(e.position, i.uint32(10).fork()).ldelim(), e.asset0 !== void 0 && a.encode(e.asset0, i.uint32(18).fork()).ldelim(), e.asset1 !== void 0 && a.encode(e.asset1, i.uint32(26).fork()).ldelim();
    for (const o of e.claimableSpreadRewards)
      a.encode(o, i.uint32(34).fork()).ldelim();
    for (const o of e.claimableIncentives)
      a.encode(o, i.uint32(42).fork()).ldelim();
    for (const o of e.forfeitedIncentives)
      a.encode(o, i.uint32(50).fork()).ldelim();
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = Y();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.position = f.decode(o, o.uint32());
          break;
        case 2:
          n.asset0 = a.decode(o, o.uint32());
          break;
        case 3:
          n.asset1 = a.decode(o, o.uint32());
          break;
        case 4:
          n.claimableSpreadRewards.push(a.decode(o, o.uint32()));
          break;
        case 5:
          n.claimableIncentives.push(a.decode(o, o.uint32()));
          break;
        case 6:
          n.forfeitedIncentives.push(a.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o, t;
    const n = Y();
    return n.position = e.position !== void 0 && e.position !== null ? f.fromPartial(e.position) : void 0, n.asset0 = e.asset0 !== void 0 && e.asset0 !== null ? a.fromPartial(e.asset0) : void 0, n.asset1 = e.asset1 !== void 0 && e.asset1 !== null ? a.fromPartial(e.asset1) : void 0, n.claimableSpreadRewards = ((i = e.claimableSpreadRewards) === null || i === void 0 ? void 0 : i.map((d) => a.fromPartial(d))) || [], n.claimableIncentives = ((o = e.claimableIncentives) === null || o === void 0 ? void 0 : o.map((d) => a.fromPartial(d))) || [], n.forfeitedIncentives = ((t = e.forfeitedIncentives) === null || t === void 0 ? void 0 : t.map((d) => a.fromPartial(d))) || [], n;
  },
  fromAmino(e) {
    return {
      position: e != null && e.position ? f.fromAmino(e.position) : void 0,
      asset0: e != null && e.asset0 ? a.fromAmino(e.asset0) : void 0,
      asset1: e != null && e.asset1 ? a.fromAmino(e.asset1) : void 0,
      claimableSpreadRewards: Array.isArray(e == null ? void 0 : e.claimable_spread_rewards) ? e.claimable_spread_rewards.map((i) => a.fromAmino(i)) : [],
      claimableIncentives: Array.isArray(e == null ? void 0 : e.claimable_incentives) ? e.claimable_incentives.map((i) => a.fromAmino(i)) : [],
      forfeitedIncentives: Array.isArray(e == null ? void 0 : e.forfeited_incentives) ? e.forfeited_incentives.map((i) => a.fromAmino(i)) : []
    };
  },
  toAmino(e) {
    const i = {};
    return i.position = e.position ? f.toAmino(e.position) : void 0, i.asset0 = e.asset0 ? a.toAmino(e.asset0) : void 0, i.asset1 = e.asset1 ? a.toAmino(e.asset1) : void 0, e.claimableSpreadRewards ? i.claimable_spread_rewards = e.claimableSpreadRewards.map((o) => o ? a.toAmino(o) : void 0) : i.claimable_spread_rewards = [], e.claimableIncentives ? i.claimable_incentives = e.claimableIncentives.map((o) => o ? a.toAmino(o) : void 0) : i.claimable_incentives = [], e.forfeitedIncentives ? i.forfeited_incentives = e.forfeitedIncentives.map((o) => o ? a.toAmino(o) : void 0) : i.forfeited_incentives = [], i;
  },
  fromAminoMsg(e) {
    return m.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/full-position-breakdown",
      value: m.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return m.decode(e.value);
  },
  toProto(e) {
    return m.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown",
      value: m.encode(e).finish()
    };
  }
};
function j() {
  return {
    uptimeGrowthOutside: []
  };
}
const p = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
  encode(e, i = r.Writer.create()) {
    for (const o of e.uptimeGrowthOutside)
      u.encode(o, i.uint32(10).fork()).ldelim();
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = j();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.uptimeGrowthOutside.push(u.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = j();
    return o.uptimeGrowthOutside = ((i = e.uptimeGrowthOutside) === null || i === void 0 ? void 0 : i.map((t) => u.fromPartial(t))) || [], o;
  },
  fromAmino(e) {
    return {
      uptimeGrowthOutside: Array.isArray(e == null ? void 0 : e.uptime_growth_outside) ? e.uptime_growth_outside.map((i) => u.fromAmino(i)) : []
    };
  },
  toAmino(e) {
    const i = {};
    return e.uptimeGrowthOutside ? i.uptime_growth_outside = e.uptimeGrowthOutside.map((o) => o ? u.toAmino(o) : void 0) : i.uptime_growth_outside = [], i;
  },
  fromAminoMsg(e) {
    return p.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/uptime-tracker",
      value: p.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return p.decode(e.value);
  },
  toProto(e) {
    return p.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
      value: p.encode(e).finish()
    };
  }
};
function ee() {
  return {
    incentiveId: s.UZERO,
    poolId: s.UZERO,
    incentiveRecordBody: void 0,
    minUptime: void 0
  };
}
const v = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
  encode(e, i = r.Writer.create()) {
    return e.incentiveId.isZero() || i.uint32(8).uint64(e.incentiveId), e.poolId.isZero() || i.uint32(16).uint64(e.poolId), e.incentiveRecordBody !== void 0 && y.encode(e.incentiveRecordBody, i.uint32(34).fork()).ldelim(), e.minUptime !== void 0 && J.encode(e.minUptime, i.uint32(42).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ee();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.incentiveId = o.uint64();
          break;
        case 2:
          n.poolId = o.uint64();
          break;
        case 4:
          n.incentiveRecordBody = y.decode(o, o.uint32());
          break;
        case 5:
          n.minUptime = J.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = ee();
    return i.incentiveId = e.incentiveId !== void 0 && e.incentiveId !== null ? s.fromValue(e.incentiveId) : s.UZERO, i.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, i.incentiveRecordBody = e.incentiveRecordBody !== void 0 && e.incentiveRecordBody !== null ? y.fromPartial(e.incentiveRecordBody) : void 0, i.minUptime = e.minUptime !== void 0 && e.minUptime !== null ? J.fromPartial(e.minUptime) : void 0, i;
  },
  fromAmino(e) {
    return {
      incentiveId: s.fromString(e.incentive_id),
      poolId: s.fromString(e.pool_id),
      incentiveRecordBody: e != null && e.incentive_record_body ? y.fromAmino(e.incentive_record_body) : void 0,
      minUptime: e != null && e.min_uptime ? J.fromAmino(e.min_uptime) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return i.incentive_id = e.incentiveId ? e.incentiveId.toString() : void 0, i.pool_id = e.poolId ? e.poolId.toString() : void 0, i.incentive_record_body = e.incentiveRecordBody ? y.toAmino(e.incentiveRecordBody) : void 0, i.min_uptime = e.minUptime ? J.toAmino(e.minUptime) : void 0, i;
  },
  fromAminoMsg(e) {
    return v.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/incentive-record",
      value: v.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return v.decode(e.value);
  },
  toProto(e) {
    return v.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
      value: v.encode(e).finish()
    };
  }
};
function ie() {
  return {
    remainingCoin: void 0,
    emissionRate: "",
    startTime: void 0
  };
}
const y = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
  encode(e, i = r.Writer.create()) {
    return e.remainingCoin !== void 0 && u.encode(e.remainingCoin, i.uint32(10).fork()).ldelim(), e.emissionRate !== "" && i.uint32(18).string(e.emissionRate), e.startTime !== void 0 && I.encode(be(e.startTime), i.uint32(26).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ie();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.remainingCoin = u.decode(o, o.uint32());
          break;
        case 2:
          n.emissionRate = o.string();
          break;
        case 3:
          n.startTime = Me(I.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o;
    const t = ie();
    return t.remainingCoin = e.remainingCoin !== void 0 && e.remainingCoin !== null ? u.fromPartial(e.remainingCoin) : void 0, t.emissionRate = (i = e.emissionRate) !== null && i !== void 0 ? i : "", t.startTime = (o = e.startTime) !== null && o !== void 0 ? o : void 0, t;
  },
  fromAmino(e) {
    return {
      remainingCoin: e != null && e.remaining_coin ? u.fromAmino(e.remaining_coin) : void 0,
      emissionRate: e.emission_rate,
      startTime: e != null && e.start_time ? I.fromAmino(e.start_time) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return i.remaining_coin = e.remainingCoin ? u.toAmino(e.remainingCoin) : void 0, i.emission_rate = e.emissionRate, i.start_time = e.startTime ? I.toAmino(e.startTime) : void 0, i;
  },
  fromAminoMsg(e) {
    return y.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/incentive-record-body",
      value: y.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return y.decode(e.value);
  },
  toProto(e) {
    return y.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
      value: y.encode(e).finish()
    };
  }
};
function oe() {
  return {
    address: "",
    poolId: s.UZERO,
    pagination: void 0
  };
}
const P = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest",
  encode(e, i = r.Writer.create()) {
    return e.address !== "" && i.uint32(10).string(e.address), e.poolId.isZero() || i.uint32(16).uint64(e.poolId), e.pagination !== void 0 && l.encode(e.pagination, i.uint32(26).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = oe();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.address = o.string();
          break;
        case 2:
          n.poolId = o.uint64();
          break;
        case 3:
          n.pagination = l.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = oe();
    return o.address = (i = e.address) !== null && i !== void 0 ? i : "", o.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, o.pagination = e.pagination !== void 0 && e.pagination !== null ? l.fromPartial(e.pagination) : void 0, o;
  },
  fromAmino(e) {
    return {
      address: e.address,
      poolId: s.fromString(e.pool_id),
      pagination: e != null && e.pagination ? l.fromAmino(e.pagination) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return i.address = e.address, i.pool_id = e.poolId ? e.poolId.toString() : void 0, i.pagination = e.pagination ? l.toAmino(e.pagination) : void 0, i;
  },
  fromAminoMsg(e) {
    return P.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/user-positions-request",
      value: P.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return P.decode(e.value);
  },
  toProto(e) {
    return P.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest",
      value: P.encode(e).finish()
    };
  }
};
function ne() {
  return {
    positions: [],
    pagination: void 0
  };
}
const q = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.positions)
      m.encode(o, i.uint32(10).fork()).ldelim();
    return e.pagination !== void 0 && c.encode(e.pagination, i.uint32(18).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ne();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.positions.push(m.decode(o, o.uint32()));
          break;
        case 2:
          n.pagination = c.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = ne();
    return o.positions = ((i = e.positions) === null || i === void 0 ? void 0 : i.map((t) => m.fromPartial(t))) || [], o.pagination = e.pagination !== void 0 && e.pagination !== null ? c.fromPartial(e.pagination) : void 0, o;
  },
  fromAmino(e) {
    return {
      positions: Array.isArray(e == null ? void 0 : e.positions) ? e.positions.map((i) => m.fromAmino(i)) : [],
      pagination: e != null && e.pagination ? c.fromAmino(e.pagination) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return e.positions ? i.positions = e.positions.map((o) => o ? m.toAmino(o) : void 0) : i.positions = [], i.pagination = e.pagination ? c.toAmino(e.pagination) : void 0, i;
  },
  fromAminoMsg(e) {
    return q.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/user-positions-response",
      value: q.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return q.decode(e.value);
  },
  toProto(e) {
    return q.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse",
      value: q.encode(e).finish()
    };
  }
};
function te() {
  return {
    positionId: s.UZERO
  };
}
const h = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest",
  encode(e, i = r.Writer.create()) {
    return e.positionId.isZero() || i.uint32(8).uint64(e.positionId), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = te();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.positionId = o.uint64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = te();
    return i.positionId = e.positionId !== void 0 && e.positionId !== null ? s.fromValue(e.positionId) : s.UZERO, i;
  },
  fromAmino(e) {
    return {
      positionId: s.fromString(e.position_id)
    };
  },
  toAmino(e) {
    const i = {};
    return i.position_id = e.positionId ? e.positionId.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return h.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/position-by-id-request",
      value: h.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return h.decode(e.value);
  },
  toProto(e) {
    return h.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest",
      value: h.encode(e).finish()
    };
  }
};
function re() {
  return {
    position: void 0
  };
}
const g = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse",
  encode(e, i = r.Writer.create()) {
    return e.position !== void 0 && m.encode(e.position, i.uint32(10).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = re();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.position = m.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = re();
    return i.position = e.position !== void 0 && e.position !== null ? m.fromPartial(e.position) : void 0, i;
  },
  fromAmino(e) {
    return {
      position: e != null && e.position ? m.fromAmino(e.position) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return i.position = e.position ? m.toAmino(e.position) : void 0, i;
  },
  fromAminoMsg(e) {
    return g.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/position-by-id-response",
      value: g.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return g.decode(e.value);
  },
  toProto(e) {
    return g.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse",
      value: g.encode(e).finish()
    };
  }
};
function de() {
  return {
    pagination: void 0
  };
}
const _ = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest",
  encode(e, i = r.Writer.create()) {
    return e.pagination !== void 0 && l.encode(e.pagination, i.uint32(18).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = de();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 2:
          n.pagination = l.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = de();
    return i.pagination = e.pagination !== void 0 && e.pagination !== null ? l.fromPartial(e.pagination) : void 0, i;
  },
  fromAmino(e) {
    return {
      pagination: e != null && e.pagination ? l.fromAmino(e.pagination) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return i.pagination = e.pagination ? l.toAmino(e.pagination) : void 0, i;
  },
  fromAminoMsg(e) {
    return _.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/pools-request",
      value: _.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return _.decode(e.value);
  },
  toProto(e) {
    return _.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest",
      value: _.encode(e).finish()
    };
  }
};
function se() {
  return {
    pools: [],
    pagination: void 0
  };
}
const w = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.pools)
      A.encode(o, i.uint32(10).fork()).ldelim();
    return e.pagination !== void 0 && c.encode(e.pagination, i.uint32(18).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = se();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.pools.push(Be(o));
          break;
        case 2:
          n.pagination = c.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = se();
    return o.pools = ((i = e.pools) === null || i === void 0 ? void 0 : i.map((t) => A.fromPartial(t))) || [], o.pagination = e.pagination !== void 0 && e.pagination !== null ? c.fromPartial(e.pagination) : void 0, o;
  },
  fromAmino(e) {
    return {
      pools: Array.isArray(e == null ? void 0 : e.pools) ? e.pools.map((i) => Oe(i)) : [],
      pagination: e != null && e.pagination ? c.fromAmino(e.pagination) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return e.pools ? i.pools = e.pools.map((o) => o ? Ze(o) : void 0) : i.pools = [], i.pagination = e.pagination ? c.toAmino(e.pagination) : void 0, i;
  },
  fromAminoMsg(e) {
    return w.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/pools-response",
      value: w.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return w.decode(e.value);
  },
  toProto(e) {
    return w.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse",
      value: w.encode(e).finish()
    };
  }
};
function ae() {
  return {};
}
const T = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest",
  encode(e, i = r.Writer.create()) {
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ae();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    return ae();
  },
  fromAmino(e) {
    return {};
  },
  toAmino(e) {
    return {};
  },
  fromAminoMsg(e) {
    return T.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/params-request",
      value: T.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return T.decode(e.value);
  },
  toProto(e) {
    return T.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest",
      value: T.encode(e).finish()
    };
  }
};
function ue() {
  return {
    params: void 0
  };
}
const b = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse",
  encode(e, i = r.Writer.create()) {
    return e.params !== void 0 && K.encode(e.params, i.uint32(10).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ue();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.params = K.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = ue();
    return i.params = e.params !== void 0 && e.params !== null ? K.fromPartial(e.params) : void 0, i;
  },
  fromAmino(e) {
    return {
      params: e != null && e.params ? K.fromAmino(e.params) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return i.params = e.params ? K.toAmino(e.params) : void 0, i;
  },
  fromAminoMsg(e) {
    return b.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/params-response",
      value: b.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return b.decode(e.value);
  },
  toProto(e) {
    return b.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse",
      value: b.encode(e).finish()
    };
  }
};
function le() {
  return {
    liquidityNet: "",
    tickIndex: s.ZERO
  };
}
const k = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet",
  encode(e, i = r.Writer.create()) {
    return e.liquidityNet !== "" && i.uint32(10).string(e.liquidityNet), e.tickIndex.isZero() || i.uint32(16).int64(e.tickIndex), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = le();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.liquidityNet = o.string();
          break;
        case 2:
          n.tickIndex = o.int64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = le();
    return o.liquidityNet = (i = e.liquidityNet) !== null && i !== void 0 ? i : "", o.tickIndex = e.tickIndex !== void 0 && e.tickIndex !== null ? s.fromValue(e.tickIndex) : s.ZERO, o;
  },
  fromAmino(e) {
    return {
      liquidityNet: e.liquidity_net,
      tickIndex: s.fromString(e.tick_index)
    };
  },
  toAmino(e) {
    const i = {};
    return i.liquidity_net = e.liquidityNet, i.tick_index = e.tickIndex ? e.tickIndex.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return k.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/tick-liquidity-net",
      value: k.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return k.decode(e.value);
  },
  toProto(e) {
    return k.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet",
      value: k.encode(e).finish()
    };
  }
};
function ce() {
  return {
    liquidityAmount: "",
    lowerTick: s.ZERO,
    upperTick: s.ZERO
  };
}
const R = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange",
  encode(e, i = r.Writer.create()) {
    return e.liquidityAmount !== "" && i.uint32(10).string(e.liquidityAmount), e.lowerTick.isZero() || i.uint32(16).int64(e.lowerTick), e.upperTick.isZero() || i.uint32(24).int64(e.upperTick), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ce();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.liquidityAmount = o.string();
          break;
        case 2:
          n.lowerTick = o.int64();
          break;
        case 3:
          n.upperTick = o.int64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = ce();
    return o.liquidityAmount = (i = e.liquidityAmount) !== null && i !== void 0 ? i : "", o.lowerTick = e.lowerTick !== void 0 && e.lowerTick !== null ? s.fromValue(e.lowerTick) : s.ZERO, o.upperTick = e.upperTick !== void 0 && e.upperTick !== null ? s.fromValue(e.upperTick) : s.ZERO, o;
  },
  fromAmino(e) {
    return {
      liquidityAmount: e.liquidity_amount,
      lowerTick: s.fromString(e.lower_tick),
      upperTick: s.fromString(e.upper_tick)
    };
  },
  toAmino(e) {
    const i = {};
    return i.liquidity_amount = e.liquidityAmount, i.lower_tick = e.lowerTick ? e.lowerTick.toString() : void 0, i.upper_tick = e.upperTick ? e.upperTick.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return R.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/liquidity-depth-with-range",
      value: R.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return R.decode(e.value);
  },
  toProto(e) {
    return R.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange",
      value: R.encode(e).finish()
    };
  }
};
function me() {
  return {
    poolId: s.UZERO,
    tokenIn: "",
    startTick: s.ZERO,
    useCurTick: !1,
    boundTick: s.ZERO,
    useNoBound: !1
  };
}
const M = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest",
  encode(e, i = r.Writer.create()) {
    return e.poolId.isZero() || i.uint32(8).uint64(e.poolId), e.tokenIn !== "" && i.uint32(18).string(e.tokenIn), e.startTick.isZero() || i.uint32(24).int64(e.startTick), e.useCurTick === !0 && i.uint32(32).bool(e.useCurTick), e.boundTick.isZero() || i.uint32(40).int64(e.boundTick), e.useNoBound === !0 && i.uint32(48).bool(e.useNoBound), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = me();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.poolId = o.uint64();
          break;
        case 2:
          n.tokenIn = o.string();
          break;
        case 3:
          n.startTick = o.int64();
          break;
        case 4:
          n.useCurTick = o.bool();
          break;
        case 5:
          n.boundTick = o.int64();
          break;
        case 6:
          n.useNoBound = o.bool();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o, t;
    const n = me();
    return n.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, n.tokenIn = (i = e.tokenIn) !== null && i !== void 0 ? i : "", n.startTick = e.startTick !== void 0 && e.startTick !== null ? s.fromValue(e.startTick) : s.ZERO, n.useCurTick = (o = e.useCurTick) !== null && o !== void 0 ? o : !1, n.boundTick = e.boundTick !== void 0 && e.boundTick !== null ? s.fromValue(e.boundTick) : s.ZERO, n.useNoBound = (t = e.useNoBound) !== null && t !== void 0 ? t : !1, n;
  },
  fromAmino(e) {
    return {
      poolId: s.fromString(e.pool_id),
      tokenIn: e.token_in,
      startTick: s.fromString(e.start_tick),
      useCurTick: e.use_cur_tick,
      boundTick: s.fromString(e.bound_tick),
      useNoBound: e.use_no_bound
    };
  },
  toAmino(e) {
    const i = {};
    return i.pool_id = e.poolId ? e.poolId.toString() : void 0, i.token_in = e.tokenIn, i.start_tick = e.startTick ? e.startTick.toString() : void 0, i.use_cur_tick = e.useCurTick, i.bound_tick = e.boundTick ? e.boundTick.toString() : void 0, i.use_no_bound = e.useNoBound, i;
  },
  fromAminoMsg(e) {
    return M.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/liquidity-net-in-direction-request",
      value: M.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return M.decode(e.value);
  },
  toProto(e) {
    return M.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest",
      value: M.encode(e).finish()
    };
  }
};
function pe() {
  return {
    liquidityDepths: [],
    currentTick: s.ZERO,
    currentLiquidity: ""
  };
}
const U = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.liquidityDepths)
      k.encode(o, i.uint32(10).fork()).ldelim();
    return e.currentTick.isZero() || i.uint32(16).int64(e.currentTick), e.currentLiquidity !== "" && i.uint32(26).string(e.currentLiquidity), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = pe();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.liquidityDepths.push(k.decode(o, o.uint32()));
          break;
        case 2:
          n.currentTick = o.int64();
          break;
        case 3:
          n.currentLiquidity = o.string();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o;
    const t = pe();
    return t.liquidityDepths = ((i = e.liquidityDepths) === null || i === void 0 ? void 0 : i.map((n) => k.fromPartial(n))) || [], t.currentTick = e.currentTick !== void 0 && e.currentTick !== null ? s.fromValue(e.currentTick) : s.ZERO, t.currentLiquidity = (o = e.currentLiquidity) !== null && o !== void 0 ? o : "", t;
  },
  fromAmino(e) {
    return {
      liquidityDepths: Array.isArray(e == null ? void 0 : e.liquidity_depths) ? e.liquidity_depths.map((i) => k.fromAmino(i)) : [],
      currentTick: s.fromString(e.current_tick),
      currentLiquidity: e.current_liquidity
    };
  },
  toAmino(e) {
    const i = {};
    return e.liquidityDepths ? i.liquidity_depths = e.liquidityDepths.map((o) => o ? k.toAmino(o) : void 0) : i.liquidity_depths = [], i.current_tick = e.currentTick ? e.currentTick.toString() : void 0, i.current_liquidity = e.currentLiquidity, i;
  },
  fromAminoMsg(e) {
    return U.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/liquidity-net-in-direction-response",
      value: U.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return U.decode(e.value);
  },
  toProto(e) {
    return U.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse",
      value: U.encode(e).finish()
    };
  }
};
function fe() {
  return {
    poolId: s.UZERO
  };
}
const S = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest",
  encode(e, i = r.Writer.create()) {
    return e.poolId.isZero() || i.uint32(8).uint64(e.poolId), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = fe();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.poolId = o.uint64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = fe();
    return i.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, i;
  },
  fromAmino(e) {
    return {
      poolId: s.fromString(e.pool_id)
    };
  },
  toAmino(e) {
    const i = {};
    return i.pool_id = e.poolId ? e.poolId.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return S.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/liquidity-per-tick-range-request",
      value: S.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return S.decode(e.value);
  },
  toProto(e) {
    return S.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest",
      value: S.encode(e).finish()
    };
  }
};
function ve() {
  return {
    liquidity: []
  };
}
const B = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.liquidity)
      R.encode(o, i.uint32(10).fork()).ldelim();
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ve();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.liquidity.push(R.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = ve();
    return o.liquidity = ((i = e.liquidity) === null || i === void 0 ? void 0 : i.map((t) => R.fromPartial(t))) || [], o;
  },
  fromAmino(e) {
    return {
      liquidity: Array.isArray(e == null ? void 0 : e.liquidity) ? e.liquidity.map((i) => R.fromAmino(i)) : []
    };
  },
  toAmino(e) {
    const i = {};
    return e.liquidity ? i.liquidity = e.liquidity.map((o) => o ? R.toAmino(o) : void 0) : i.liquidity = [], i;
  },
  fromAminoMsg(e) {
    return B.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/liquidity-per-tick-range-response",
      value: B.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return B.decode(e.value);
  },
  toProto(e) {
    return B.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse",
      value: B.encode(e).finish()
    };
  }
};
function ye() {
  return {
    positionId: s.UZERO
  };
}
const O = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest",
  encode(e, i = r.Writer.create()) {
    return e.positionId.isZero() || i.uint32(8).uint64(e.positionId), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ye();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.positionId = o.uint64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = ye();
    return i.positionId = e.positionId !== void 0 && e.positionId !== null ? s.fromValue(e.positionId) : s.UZERO, i;
  },
  fromAmino(e) {
    return {
      positionId: s.fromString(e.position_id)
    };
  },
  toAmino(e) {
    const i = {};
    return i.position_id = e.positionId ? e.positionId.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return O.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/claimable-spread-rewards-request",
      value: O.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return O.decode(e.value);
  },
  toProto(e) {
    return O.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest",
      value: O.encode(e).finish()
    };
  }
};
function ke() {
  return {
    claimableSpreadRewards: []
  };
}
const Z = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.claimableSpreadRewards)
      a.encode(o, i.uint32(10).fork()).ldelim();
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ke();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.claimableSpreadRewards.push(a.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = ke();
    return o.claimableSpreadRewards = ((i = e.claimableSpreadRewards) === null || i === void 0 ? void 0 : i.map((t) => a.fromPartial(t))) || [], o;
  },
  fromAmino(e) {
    return {
      claimableSpreadRewards: Array.isArray(e == null ? void 0 : e.claimable_spread_rewards) ? e.claimable_spread_rewards.map((i) => a.fromAmino(i)) : []
    };
  },
  toAmino(e) {
    const i = {};
    return e.claimableSpreadRewards ? i.claimable_spread_rewards = e.claimableSpreadRewards.map((o) => o ? a.toAmino(o) : void 0) : i.claimable_spread_rewards = [], i;
  },
  fromAminoMsg(e) {
    return Z.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/claimable-spread-rewards-response",
      value: Z.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return Z.decode(e.value);
  },
  toProto(e) {
    return Z.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse",
      value: Z.encode(e).finish()
    };
  }
};
function Re() {
  return {
    positionId: s.UZERO
  };
}
const C = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest",
  encode(e, i = r.Writer.create()) {
    return e.positionId.isZero() || i.uint32(8).uint64(e.positionId), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = Re();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.positionId = o.uint64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = Re();
    return i.positionId = e.positionId !== void 0 && e.positionId !== null ? s.fromValue(e.positionId) : s.UZERO, i;
  },
  fromAmino(e) {
    return {
      positionId: s.fromString(e.position_id)
    };
  },
  toAmino(e) {
    const i = {};
    return i.position_id = e.positionId ? e.positionId.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return C.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/claimable-incentives-request",
      value: C.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return C.decode(e.value);
  },
  toProto(e) {
    return C.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest",
      value: C.encode(e).finish()
    };
  }
};
function Ae() {
  return {
    claimableIncentives: [],
    forfeitedIncentives: []
  };
}
const L = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.claimableIncentives)
      a.encode(o, i.uint32(10).fork()).ldelim();
    for (const o of e.forfeitedIncentives)
      a.encode(o, i.uint32(18).fork()).ldelim();
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = Ae();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.claimableIncentives.push(a.decode(o, o.uint32()));
          break;
        case 2:
          n.forfeitedIncentives.push(a.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o;
    const t = Ae();
    return t.claimableIncentives = ((i = e.claimableIncentives) === null || i === void 0 ? void 0 : i.map((n) => a.fromPartial(n))) || [], t.forfeitedIncentives = ((o = e.forfeitedIncentives) === null || o === void 0 ? void 0 : o.map((n) => a.fromPartial(n))) || [], t;
  },
  fromAmino(e) {
    return {
      claimableIncentives: Array.isArray(e == null ? void 0 : e.claimable_incentives) ? e.claimable_incentives.map((i) => a.fromAmino(i)) : [],
      forfeitedIncentives: Array.isArray(e == null ? void 0 : e.forfeited_incentives) ? e.forfeited_incentives.map((i) => a.fromAmino(i)) : []
    };
  },
  toAmino(e) {
    const i = {};
    return e.claimableIncentives ? i.claimable_incentives = e.claimableIncentives.map((o) => o ? a.toAmino(o) : void 0) : i.claimable_incentives = [], e.forfeitedIncentives ? i.forfeited_incentives = e.forfeitedIncentives.map((o) => o ? a.toAmino(o) : void 0) : i.forfeited_incentives = [], i;
  },
  fromAminoMsg(e) {
    return L.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/claimable-incentives-response",
      value: L.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return L.decode(e.value);
  },
  toProto(e) {
    return L.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse",
      value: L.encode(e).finish()
    };
  }
};
function Ie() {
  return {
    poolId: s.UZERO
  };
}
const G = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest",
  encode(e, i = r.Writer.create()) {
    return e.poolId.isZero() || i.uint32(8).uint64(e.poolId), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = Ie();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.poolId = o.uint64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = Ie();
    return i.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, i;
  },
  fromAmino(e) {
    return {
      poolId: s.fromString(e.pool_id)
    };
  },
  toAmino(e) {
    const i = {};
    return i.pool_id = e.poolId ? e.poolId.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return G.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/pool-accumulator-rewards-request",
      value: G.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return G.decode(e.value);
  },
  toProto(e) {
    return G.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest",
      value: G.encode(e).finish()
    };
  }
};
function Pe() {
  return {
    spreadRewardGrowthGlobal: [],
    uptimeGrowthGlobal: []
  };
}
const E = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.spreadRewardGrowthGlobal)
      u.encode(o, i.uint32(10).fork()).ldelim();
    for (const o of e.uptimeGrowthGlobal)
      p.encode(o, i.uint32(18).fork()).ldelim();
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = Pe();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.spreadRewardGrowthGlobal.push(u.decode(o, o.uint32()));
          break;
        case 2:
          n.uptimeGrowthGlobal.push(p.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o;
    const t = Pe();
    return t.spreadRewardGrowthGlobal = ((i = e.spreadRewardGrowthGlobal) === null || i === void 0 ? void 0 : i.map((n) => u.fromPartial(n))) || [], t.uptimeGrowthGlobal = ((o = e.uptimeGrowthGlobal) === null || o === void 0 ? void 0 : o.map((n) => p.fromPartial(n))) || [], t;
  },
  fromAmino(e) {
    return {
      spreadRewardGrowthGlobal: Array.isArray(e == null ? void 0 : e.spread_reward_growth_global) ? e.spread_reward_growth_global.map((i) => u.fromAmino(i)) : [],
      uptimeGrowthGlobal: Array.isArray(e == null ? void 0 : e.uptime_growth_global) ? e.uptime_growth_global.map((i) => p.fromAmino(i)) : []
    };
  },
  toAmino(e) {
    const i = {};
    return e.spreadRewardGrowthGlobal ? i.spread_reward_growth_global = e.spreadRewardGrowthGlobal.map((o) => o ? u.toAmino(o) : void 0) : i.spread_reward_growth_global = [], e.uptimeGrowthGlobal ? i.uptime_growth_global = e.uptimeGrowthGlobal.map((o) => o ? p.toAmino(o) : void 0) : i.uptime_growth_global = [], i;
  },
  fromAminoMsg(e) {
    return E.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/pool-accumulator-rewards-response",
      value: E.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return E.decode(e.value);
  },
  toProto(e) {
    return E.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse",
      value: E.encode(e).finish()
    };
  }
};
function qe() {
  return {
    poolId: s.UZERO,
    tickIndex: s.ZERO
  };
}
const D = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest",
  encode(e, i = r.Writer.create()) {
    return e.poolId.isZero() || i.uint32(8).uint64(e.poolId), e.tickIndex.isZero() || i.uint32(16).int64(e.tickIndex), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = qe();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.poolId = o.uint64();
          break;
        case 2:
          n.tickIndex = o.int64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = qe();
    return i.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, i.tickIndex = e.tickIndex !== void 0 && e.tickIndex !== null ? s.fromValue(e.tickIndex) : s.ZERO, i;
  },
  fromAmino(e) {
    return {
      poolId: s.fromString(e.pool_id),
      tickIndex: s.fromString(e.tick_index)
    };
  },
  toAmino(e) {
    const i = {};
    return i.pool_id = e.poolId ? e.poolId.toString() : void 0, i.tick_index = e.tickIndex ? e.tickIndex.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return D.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/tick-accumulator-trackers-request",
      value: D.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return D.decode(e.value);
  },
  toProto(e) {
    return D.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest",
      value: D.encode(e).finish()
    };
  }
};
function he() {
  return {
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: []
  };
}
const W = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.spreadRewardGrowthOppositeDirectionOfLastTraversal)
      u.encode(o, i.uint32(10).fork()).ldelim();
    for (const o of e.uptimeTrackers)
      p.encode(o, i.uint32(18).fork()).ldelim();
    return i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = he();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(u.decode(o, o.uint32()));
          break;
        case 2:
          n.uptimeTrackers.push(p.decode(o, o.uint32()));
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i, o;
    const t = he();
    return t.spreadRewardGrowthOppositeDirectionOfLastTraversal = ((i = e.spreadRewardGrowthOppositeDirectionOfLastTraversal) === null || i === void 0 ? void 0 : i.map((n) => u.fromPartial(n))) || [], t.uptimeTrackers = ((o = e.uptimeTrackers) === null || o === void 0 ? void 0 : o.map((n) => p.fromPartial(n))) || [], t;
  },
  fromAmino(e) {
    return {
      spreadRewardGrowthOppositeDirectionOfLastTraversal: Array.isArray(e == null ? void 0 : e.spread_reward_growth_opposite_direction_of_last_traversal) ? e.spread_reward_growth_opposite_direction_of_last_traversal.map((i) => u.fromAmino(i)) : [],
      uptimeTrackers: Array.isArray(e == null ? void 0 : e.uptime_trackers) ? e.uptime_trackers.map((i) => p.fromAmino(i)) : []
    };
  },
  toAmino(e) {
    const i = {};
    return e.spreadRewardGrowthOppositeDirectionOfLastTraversal ? i.spread_reward_growth_opposite_direction_of_last_traversal = e.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((o) => o ? u.toAmino(o) : void 0) : i.spread_reward_growth_opposite_direction_of_last_traversal = [], e.uptimeTrackers ? i.uptime_trackers = e.uptimeTrackers.map((o) => o ? p.toAmino(o) : void 0) : i.uptime_trackers = [], i;
  },
  fromAminoMsg(e) {
    return W.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/tick-accumulator-trackers-response",
      value: W.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return W.decode(e.value);
  },
  toProto(e) {
    return W.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse",
      value: W.encode(e).finish()
    };
  }
};
function ge() {
  return {
    poolId: s.UZERO,
    pagination: void 0
  };
}
const N = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest",
  encode(e, i = r.Writer.create()) {
    return e.poolId.isZero() || i.uint32(8).uint64(e.poolId), e.pagination !== void 0 && l.encode(e.pagination, i.uint32(18).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = ge();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.poolId = o.uint64();
          break;
        case 2:
          n.pagination = l.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = ge();
    return i.poolId = e.poolId !== void 0 && e.poolId !== null ? s.fromValue(e.poolId) : s.UZERO, i.pagination = e.pagination !== void 0 && e.pagination !== null ? l.fromPartial(e.pagination) : void 0, i;
  },
  fromAmino(e) {
    return {
      poolId: s.fromString(e.pool_id),
      pagination: e != null && e.pagination ? l.fromAmino(e.pagination) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return i.pool_id = e.poolId ? e.poolId.toString() : void 0, i.pagination = e.pagination ? l.toAmino(e.pagination) : void 0, i;
  },
  fromAminoMsg(e) {
    return N.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/incentive-records-request",
      value: N.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return N.decode(e.value);
  },
  toProto(e) {
    return N.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest",
      value: N.encode(e).finish()
    };
  }
};
function _e() {
  return {
    incentiveRecords: [],
    pagination: void 0
  };
}
const F = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse",
  encode(e, i = r.Writer.create()) {
    for (const o of e.incentiveRecords)
      v.encode(o, i.uint32(10).fork()).ldelim();
    return e.pagination !== void 0 && c.encode(e.pagination, i.uint32(18).fork()).ldelim(), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = _e();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.incentiveRecords.push(v.decode(o, o.uint32()));
          break;
        case 2:
          n.pagination = c.decode(o, o.uint32());
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    var i;
    const o = _e();
    return o.incentiveRecords = ((i = e.incentiveRecords) === null || i === void 0 ? void 0 : i.map((t) => v.fromPartial(t))) || [], o.pagination = e.pagination !== void 0 && e.pagination !== null ? c.fromPartial(e.pagination) : void 0, o;
  },
  fromAmino(e) {
    return {
      incentiveRecords: Array.isArray(e == null ? void 0 : e.incentive_records) ? e.incentive_records.map((i) => v.fromAmino(i)) : [],
      pagination: e != null && e.pagination ? c.fromAmino(e.pagination) : void 0
    };
  },
  toAmino(e) {
    const i = {};
    return e.incentiveRecords ? i.incentive_records = e.incentiveRecords.map((o) => o ? v.toAmino(o) : void 0) : i.incentive_records = [], i.pagination = e.pagination ? c.toAmino(e.pagination) : void 0, i;
  },
  fromAminoMsg(e) {
    return F.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/incentive-records-response",
      value: F.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return F.decode(e.value);
  },
  toProto(e) {
    return F.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse",
      value: F.encode(e).finish()
    };
  }
};
function we() {
  return {
    concentratedPoolId: s.UZERO
  };
}
const $ = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest",
  encode(e, i = r.Writer.create()) {
    return e.concentratedPoolId.isZero() || i.uint32(8).uint64(e.concentratedPoolId), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = we();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.concentratedPoolId = o.uint64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = we();
    return i.concentratedPoolId = e.concentratedPoolId !== void 0 && e.concentratedPoolId !== null ? s.fromValue(e.concentratedPoolId) : s.UZERO, i;
  },
  fromAmino(e) {
    return {
      concentratedPoolId: s.fromString(e.concentrated_pool_id)
    };
  },
  toAmino(e) {
    const i = {};
    return i.concentrated_pool_id = e.concentratedPoolId ? e.concentratedPoolId.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return $.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request",
      value: $.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return $.decode(e.value);
  },
  toProto(e) {
    return $.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest",
      value: $.encode(e).finish()
    };
  }
};
function Te() {
  return {
    cfmmPoolId: s.UZERO
  };
}
const x = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse",
  encode(e, i = r.Writer.create()) {
    return e.cfmmPoolId.isZero() || i.uint32(8).uint64(e.cfmmPoolId), i;
  },
  decode(e, i) {
    const o = e instanceof r.Reader ? e : new r.Reader(e);
    let t = i === void 0 ? o.len : o.pos + i;
    const n = Te();
    for (; o.pos < t; ) {
      const d = o.uint32();
      switch (d >>> 3) {
        case 1:
          n.cfmmPoolId = o.uint64();
          break;
        default:
          o.skipType(d & 7);
          break;
      }
    }
    return n;
  },
  fromPartial(e) {
    const i = Te();
    return i.cfmmPoolId = e.cfmmPoolId !== void 0 && e.cfmmPoolId !== null ? s.fromValue(e.cfmmPoolId) : s.UZERO, i;
  },
  fromAmino(e) {
    return {
      cfmmPoolId: s.fromString(e.cfmm_pool_id)
    };
  },
  toAmino(e) {
    const i = {};
    return i.cfmm_pool_id = e.cfmmPoolId ? e.cfmmPoolId.toString() : void 0, i;
  },
  fromAminoMsg(e) {
    return x.fromAmino(e.value);
  },
  toAminoMsg(e) {
    return {
      type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response",
      value: x.toAmino(e)
    };
  },
  fromProtoMsg(e) {
    return x.decode(e.value);
  },
  toProto(e) {
    return x.encode(e).finish();
  },
  toProtoMsg(e) {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse",
      value: x.encode(e).finish()
    };
  }
}, Be = (e) => {
  const i = e instanceof r.Reader ? e : new r.Reader(e), o = A.decode(i, i.uint32());
  switch (o.typeUrl) {
    case "/osmosis.concentratedliquidity.v1beta1.Pool":
      return H.decode(o.value);
    case "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool":
      return z.decode(o.value);
    case "/osmosis.gamm.v1beta1.Pool":
      return Q.decode(o.value);
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return V.decode(o.value);
    default:
      return o;
  }
}, Oe = (e) => {
  switch (e.type) {
    case "osmosis/concentratedliquidity/pool":
      return A.fromPartial({
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
        value: H.encode(H.fromPartial(H.fromAmino(e.value))).finish()
      });
    case "osmosis/cosmwasmpool/cosm-wasm-pool":
      return A.fromPartial({
        typeUrl: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool",
        value: z.encode(z.fromPartial(z.fromAmino(e.value))).finish()
      });
    case "osmosis/gamm/BalancerPool":
      return A.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.Pool",
        value: Q.encode(Q.fromPartial(Q.fromAmino(e.value))).finish()
      });
    case "osmosis/gamm/StableswapPool":
      return A.fromPartial({
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        value: V.encode(V.fromPartial(V.fromAmino(e.value))).finish()
      });
    default:
      return A.fromAmino(e);
  }
}, Ze = (e) => {
  switch (e.typeUrl) {
    case "/osmosis.concentratedliquidity.v1beta1.Pool":
      return {
        type: "osmosis/concentratedliquidity/pool",
        value: H.toAmino(H.decode(e.value))
      };
    case "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool":
      return {
        type: "osmosis/cosmwasmpool/cosm-wasm-pool",
        value: z.toAmino(z.decode(e.value))
      };
    case "/osmosis.gamm.v1beta1.Pool":
      return {
        type: "osmosis/gamm/BalancerPool",
        value: Q.toAmino(Q.decode(e.value))
      };
    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return {
        type: "osmosis/gamm/StableswapPool",
        value: V.toAmino(V.decode(e.value))
      };
    default:
      return A.toAmino(e);
  }
};
class Ce {
  constructor(i) {
    Se(this, "rpc", void 0), this.rpc = i, this.pools = this.pools.bind(this), this.params = this.params.bind(this), this.userPositions = this.userPositions.bind(this), this.liquidityPerTickRange = this.liquidityPerTickRange.bind(this), this.liquidityNetInDirection = this.liquidityNetInDirection.bind(this), this.claimableSpreadRewards = this.claimableSpreadRewards.bind(this), this.claimableIncentives = this.claimableIncentives.bind(this), this.positionById = this.positionById.bind(this), this.poolAccumulatorRewards = this.poolAccumulatorRewards.bind(this), this.incentiveRecords = this.incentiveRecords.bind(this), this.tickAccumulatorTrackers = this.tickAccumulatorTrackers.bind(this), this.cFMMPoolIdLinkFromConcentratedPoolId = this.cFMMPoolIdLinkFromConcentratedPoolId.bind(this);
  }
  pools(i = {
    pagination: void 0
  }) {
    const o = _.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Pools", o).then((n) => w.decode(new r.Reader(n)));
  }
  params(i = {}) {
    const o = T.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Params", o).then((n) => b.decode(new r.Reader(n)));
  }
  userPositions(i) {
    const o = P.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "UserPositions", o).then((n) => q.decode(new r.Reader(n)));
  }
  liquidityPerTickRange(i) {
    const o = S.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "LiquidityPerTickRange", o).then((n) => B.decode(new r.Reader(n)));
  }
  liquidityNetInDirection(i) {
    const o = M.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "LiquidityNetInDirection", o).then((n) => U.decode(new r.Reader(n)));
  }
  claimableSpreadRewards(i) {
    const o = O.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "ClaimableSpreadRewards", o).then((n) => Z.decode(new r.Reader(n)));
  }
  claimableIncentives(i) {
    const o = C.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "ClaimableIncentives", o).then((n) => L.decode(new r.Reader(n)));
  }
  positionById(i) {
    const o = h.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PositionById", o).then((n) => g.decode(new r.Reader(n)));
  }
  poolAccumulatorRewards(i) {
    const o = G.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PoolAccumulatorRewards", o).then((n) => E.decode(new r.Reader(n)));
  }
  incentiveRecords(i) {
    const o = N.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "IncentiveRecords", o).then((n) => F.decode(new r.Reader(n)));
  }
  tickAccumulatorTrackers(i) {
    const o = D.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "TickAccumulatorTrackers", o).then((n) => W.decode(new r.Reader(n)));
  }
  cFMMPoolIdLinkFromConcentratedPoolId(i) {
    const o = $.encode(i).finish();
    return this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "CFMMPoolIdLinkFromConcentratedPoolId", o).then((n) => x.decode(new r.Reader(n)));
  }
}
const Ge = (e) => {
  const i = Ue.createProtobufRpcClient(e), o = new Ce(i);
  return {
    pools(t) {
      return o.pools(t);
    },
    params(t) {
      return o.params(t);
    },
    userPositions(t) {
      return o.userPositions(t);
    },
    liquidityPerTickRange(t) {
      return o.liquidityPerTickRange(t);
    },
    liquidityNetInDirection(t) {
      return o.liquidityNetInDirection(t);
    },
    claimableSpreadRewards(t) {
      return o.claimableSpreadRewards(t);
    },
    claimableIncentives(t) {
      return o.claimableIncentives(t);
    },
    positionById(t) {
      return o.positionById(t);
    },
    poolAccumulatorRewards(t) {
      return o.poolAccumulatorRewards(t);
    },
    incentiveRecords(t) {
      return o.incentiveRecords(t);
    },
    tickAccumulatorTrackers(t) {
      return o.tickAccumulatorTrackers(t);
    },
    cFMMPoolIdLinkFromConcentratedPoolId(t) {
      return o.cFMMPoolIdLinkFromConcentratedPoolId(t);
    }
  };
};
export {
  Ce as QueryClientImpl,
  Ge as createRpcQueryExtension
};
