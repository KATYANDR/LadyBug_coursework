import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  GestureResponderEvent,
} from 'react-native';
import SimpleText from '../Inputs/SimpleText';

interface SelectPersonCountProps {
  isVisible: boolean;
  onClose: (event?: GestureResponderEvent) => void;
  onSelect: (count: number) => void;
  title: string;
}

const SelectPersonCount: React.FC<SelectPersonCountProps> = ({
  isVisible,
  onClose,
  onSelect,
  title
}) => {
  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  const personCounts: number[] = Array.from({ length: 10 }, (_, i) => i + 1); // Числа от 1 до 10

  const handleSelect = (count: number) => {
    setSelectedCount(count);
    onSelect(count);
    onClose(); // Закрытие модального окна
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            data={personCounts}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <SimpleText title='Закрыть' onPress={onClose}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SelectPersonCount;
