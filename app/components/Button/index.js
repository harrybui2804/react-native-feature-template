import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppColors from '../../config/colors';
import Styles from './styles';

type Props = {
  label?: string,
  icon?: any,
  iconLeft?: boolean,
  style?: any,
  textStyle?: any,
  onPress?: any,
  colorSet?: string,
  disabled?: boolean,
};

export default class Button extends PureComponent<Props> {
  static defaultProps = {
    label: 'Button',
    icon: null,
    iconLeft: false,
    style: {},
    textStyle: {},
    onPress: () => {},
    colorSet: 'primary', // primary, secondary, grey, dark
    disabled: false,
  };

  render() {
    const {
      label,
      icon,
      iconLeft,
      style,
      textStyle,
      onPress,
      colorSet,
      disabled,
    } = this.props;
    let bg;
    let fg;
    let bc;
    switch (colorSet) {
      case 'secondary':
        bg = AppColors.white;
        fg = AppColors.black;
        bc = AppColors.secondary;
        break;
      case 'grey':
        bg = AppColors.lightGrey;
        fg = AppColors.white;
        bc = AppColors.lightGrey;
        break;
      case 'dark':
        bg = AppColors.black;
        fg = AppColors.white;
        bc = AppColors.black;
        break;
      case 'trans':
        bg = AppColors.transparent;
        fg = AppColors.white;
        bc = AppColors.transparent;
        break;
      default:
        bg = AppColors.primary;
        fg = AppColors.white;
        bc = AppColors.primary;
        break;
    }
    return (
      <View
        style={[
          Styles.container,
          {backgroundColor: bg, borderColor: bc},
          style,
          disabled && {opacity: 0.5},
        ]}>
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={[Styles.button]}>
          {icon && iconLeft ? (
            <View style={[Styles.icon, Styles.iconLeft]}>{icon}</View>
          ) : null}
          <Text style={[Styles.label, {color: fg}, textStyle]}>{label}</Text>
          {icon && !iconLeft ? <View style={Styles.icon}>{icon}</View> : null}
        </TouchableOpacity>
      </View>
    );
  }
}
