import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DeskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Desk {
  readonly id: string;
  readonly region: string;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly building?: string | null;
  readonly floor?: number | null;
  readonly deskId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Desk, DeskMetaData>);
  static copyOf(source: Desk, mutator: (draft: MutableModel<Desk, DeskMetaData>) => MutableModel<Desk, DeskMetaData> | void): Desk;
}