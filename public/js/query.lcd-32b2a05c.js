import { _ as e, s as n } from "./main-a7cb6b7d.js";
class c {
  constructor({
    requestClient: i
  }) {
    e(this, "req", void 0), this.req = i, this.pools = this.pools.bind(this), this.params = this.params.bind(this), this.userPositions = this.userPositions.bind(this), this.liquidityPerTickRange = this.liquidityPerTickRange.bind(this), this.liquidityNetInDirection = this.liquidityNetInDirection.bind(this), this.claimableSpreadRewards = this.claimableSpreadRewards.bind(this), this.claimableIncentives = this.claimableIncentives.bind(this), this.positionById = this.positionById.bind(this), this.poolAccumulatorRewards = this.poolAccumulatorRewards.bind(this), this.incentiveRecords = this.incentiveRecords.bind(this), this.tickAccumulatorTrackers = this.tickAccumulatorTrackers.bind(this), this.cFMMPoolIdLinkFromConcentratedPoolId = this.cFMMPoolIdLinkFromConcentratedPoolId.bind(this);
  }
  /* Pools returns all concentrated liquidity pools */
  async pools(i = {
    pagination: void 0
  }) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.pagination) < "u" && n(o, i.pagination);
    const t = "osmosis/concentratedliquidity/v1beta1/pools";
    return await this.req.get(t, o);
  }
  /* Params returns concentrated liquidity module params. */
  async params(i = {}) {
    const o = "osmosis/concentratedliquidity/v1beta1/params";
    return await this.req.get(o);
  }
  /* UserPositions returns all concentrated postitions of some address. */
  async userPositions(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.poolId) < "u" && (o.params.pool_id = i.poolId), typeof (i == null ? void 0 : i.pagination) < "u" && n(o, i.pagination);
    const t = `osmosis/concentratedliquidity/v1beta1/positions/${i.address}`;
    return await this.req.get(t, o);
  }
  /* LiquidityPerTickRange returns the amount of liquidity per every tick range
   existing within the given pool */
  async liquidityPerTickRange(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.poolId) < "u" && (o.params.pool_id = i.poolId);
    const t = "osmosis/concentratedliquidity/v1beta1/liquidity_per_tick_range";
    return await this.req.get(t, o);
  }
  /* LiquidityNetInDirection returns liquidity net in the direction given.
   Uses the bound if specified, if not uses either min tick / max tick
   depending on the direction. */
  async liquidityNetInDirection(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.poolId) < "u" && (o.params.pool_id = i.poolId), typeof (i == null ? void 0 : i.tokenIn) < "u" && (o.params.token_in = i.tokenIn), typeof (i == null ? void 0 : i.startTick) < "u" && (o.params.start_tick = i.startTick), typeof (i == null ? void 0 : i.useCurTick) < "u" && (o.params.use_cur_tick = i.useCurTick), typeof (i == null ? void 0 : i.boundTick) < "u" && (o.params.bound_tick = i.boundTick), typeof (i == null ? void 0 : i.useNoBound) < "u" && (o.params.use_no_bound = i.useNoBound);
    const t = "osmosis/concentratedliquidity/v1beta1/liquidity_net_in_direction";
    return await this.req.get(t, o);
  }
  /* ClaimableSpreadRewards returns the amount of spread rewards that can be
   claimed by a position with the given id. */
  async claimableSpreadRewards(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.positionId) < "u" && (o.params.position_id = i.positionId);
    const t = "osmosis/concentratedliquidity/v1beta1/claimable_spread_rewards";
    return await this.req.get(t, o);
  }
  /* ClaimableIncentives returns the amount of incentives that can be claimed
   and how many would be forfeited by a position with the given id. */
  async claimableIncentives(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.positionId) < "u" && (o.params.position_id = i.positionId);
    const t = "osmosis/concentratedliquidity/v1beta1/claimable_incentives";
    return await this.req.get(t, o);
  }
  /* PositionById returns a position with the given id. */
  async positionById(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.positionId) < "u" && (o.params.position_id = i.positionId);
    const t = "osmosis/concentratedliquidity/v1beta1/position_by_id";
    return await this.req.get(t, o);
  }
  /* PoolAccumulatorRewards returns the pool-global accumulator rewards.
   Contains spread factor rewards and uptime rewards. */
  async poolAccumulatorRewards(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.poolId) < "u" && (o.params.pool_id = i.poolId);
    const t = "osmosis/concentratedliquidity/v1beta1/pool_accum_rewards";
    return await this.req.get(t, o);
  }
  /* IncentiveRecords returns the incentive records for a given poolId */
  async incentiveRecords(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.poolId) < "u" && (o.params.pool_id = i.poolId), typeof (i == null ? void 0 : i.pagination) < "u" && n(o, i.pagination);
    const t = "osmosis/concentratedliquidity/v1beta1/incentive_records";
    return await this.req.get(t, o);
  }
  /* TickAccumulatorTrackers returns the tick accumulator trackers.
   Contains spread factor and uptime accumulator trackers. */
  async tickAccumulatorTrackers(i) {
    const o = {
      params: {}
    };
    typeof (i == null ? void 0 : i.poolId) < "u" && (o.params.pool_id = i.poolId), typeof (i == null ? void 0 : i.tickIndex) < "u" && (o.params.tick_index = i.tickIndex);
    const t = "osmosis/concentratedliquidity/v1beta1/tick_accum_trackers";
    return await this.req.get(t, o);
  }
  /* CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
   pool that is linked with the given concentrated pool. */
  async cFMMPoolIdLinkFromConcentratedPoolId(i) {
    const o = `osmosis/concentratedliquidity/v1beta1/cfmm_pool_id_link_from_concentrated/${i.concentratedPoolId}`;
    return await this.req.get(o);
  }
}
export {
  c as LCDQueryClient
};
