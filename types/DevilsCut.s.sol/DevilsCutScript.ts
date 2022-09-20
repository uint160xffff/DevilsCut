/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface DevilsCutScriptInterface extends utils.Interface {
  functions: {
    "DBS_TREASURY_ADDRESS()": FunctionFragment;
    "IS_SCRIPT()": FunctionFragment;
    "ROYALTY_RECEIVERS(uint256)": FunctionFragment;
    "ROYALTY_SHARES(uint256)": FunctionFragment;
    "baseUri()": FunctionFragment;
    "run()": FunctionFragment;
    "setUp()": FunctionFragment;
    "vm()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DBS_TREASURY_ADDRESS"
      | "IS_SCRIPT"
      | "ROYALTY_RECEIVERS"
      | "ROYALTY_SHARES"
      | "baseUri"
      | "run"
      | "setUp"
      | "vm"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DBS_TREASURY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ROYALTY_RECEIVERS",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ROYALTY_SHARES",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "baseUri", values?: undefined): string;
  encodeFunctionData(functionFragment: "run", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DBS_TREASURY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROYALTY_RECEIVERS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROYALTY_SHARES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseUri", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;

  events: {};
}

export interface DevilsCutScript extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DevilsCutScriptInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DBS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    ROYALTY_RECEIVERS(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ROYALTY_SHARES(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    baseUri(overrides?: CallOverrides): Promise<[string]>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vm(overrides?: CallOverrides): Promise<[string]>;
  };

  DBS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<string>;

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  ROYALTY_RECEIVERS(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  ROYALTY_SHARES(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  baseUri(overrides?: CallOverrides): Promise<string>;

  run(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUp(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DBS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<string>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    ROYALTY_RECEIVERS(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    ROYALTY_SHARES(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseUri(overrides?: CallOverrides): Promise<string>;

    run(overrides?: CallOverrides): Promise<void>;

    setUp(overrides?: CallOverrides): Promise<void>;

    vm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    DBS_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    ROYALTY_RECEIVERS(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ROYALTY_SHARES(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseUri(overrides?: CallOverrides): Promise<BigNumber>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DBS_TREASURY_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROYALTY_RECEIVERS(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROYALTY_SHARES(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseUri(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
