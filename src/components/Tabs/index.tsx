import { FC } from 'react'
import Tabs, { TabProps } from './tabs'
import TabsItem, { TabsItemProps } from './tabsItem'

type TabsComponent = FC<TabProps> & {
  Item?: FC<TabsItemProps>
}

let TransTab: TabsComponent = Tabs
TransTab.Item = TabsItem

// export type {TabProps, TabsItemProps}
export default TransTab
