import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { MenuItemType } from '../../utils/menuConstants';
import colors from '../../utils/colors';

interface IProfileViewProps {
  menuItems: MenuItemType;
  onPress: (toNavigate: string, params: any) => void;
}

const ProfileView: FC<IProfileViewProps> = ({ menuItems, onPress }) => {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={`menu_item_${index}`}
          style={styles.menuItemContainer}
          onPress={() => onPress(item.toNavigate, item?.params)}
        >
          <Text style={styles.menuItemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  menuItemContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray
  },
  menuItemText: {
    fontSize: 20
  }
});
