import SortField from "./SortField";

interface SortOrder {
  /**
   * What field within the Zwift Route to order by
   */
  orderBy: SortField;

  /**
   * Ascending (true) or Descening?
   */
  ascending: boolean;
}

export default SortOrder;
