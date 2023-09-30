import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../config";
import { FlatList } from "react-native-gesture-handler";

const Playground = ({ route }) => {
  const [questions, setQuestion] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const { category } = route.params;

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    setSelectedOptions({});
    setShowResult(false);
    const db = firebase.firestore();
    const questionsRef = db.collection("questions");
    const snapshot = await questionsRef.where("category", "==", category).get();
    if (snapshot.empty) {
      console.log("No Data.....");
      return;
    } else {
      const allQuestions = snapshot.docs.map((doc) => doc.data());
      const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffleQuestions.slice(0, 10);
      setQuestion(selectedQuestions);
    }
  };

  const handleOptionSelect = (questioIndex, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questioIndex]: option,
    });
  };
  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctOption) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResult(true);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionsText}>{item.question}</Text>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 1 && styles.selectedOptions,
                showResult && item.correctOption === 1 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 1 &&
                  selectedOptions[index] != item.correctOption &&
                  styles.wrongAnswer,
              ]}
              onPress={() => handleOptionSelect(index, 1)}
              disabled={showResult}
            >
              <Text>{item.option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 2 && styles.selectedOptions,
                showResult && item.correctOption === 2 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 2 &&
                  selectedOptions[index] != item.correctOption &&
                  styles.wrongAnswer,
              ]}
              onPress={() => handleOptionSelect(index, 2)}
              disabled={showResult}
            >
              <Text>{item.option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 3 && styles.selectedOptions,
                showResult && item.correctOption === 3 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 3 &&
                  selectedOptions[index] != item.correctOption &&
                  styles.wrongAnswer,
              ]}
              onPress={() => handleOptionSelect(index, 3)}
              disabled={showResult}
            >
              <Text>{item.option3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 4 && styles.selectedOptions,
                showResult && item.correctOption === 4 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 4 &&
                  selectedOptions[index] != item.correctOption &&
                  styles.wrongAnswer,
              ]}
              onPress={() => handleOptionSelect(index, 4)}
              disabled={showResult}
            >
              <Text>{item.option4}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleSubmit()}
        disabled={showResult}
      >
        <Text style={styles.submitText}>Submit</Text>
        {showResult && (
          <View style={styles.Result}>
            <Text style={styles.resultText}>
              You Scored {score} out pf {questions.length}
            </Text>
            <TouchableOpacity style={styles.tryAgain} onPress={getQuestions}>
              <Text style={styles.tryAgainText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Playground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B4513",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    backgroundColor: "#FFF5E1",
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  option: {
    backgroundColor: "#FFA500",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },

  selectedOptions: {
    backgroundColor: "#949494",
  },
  correctOption: {
    backgroundColor: "green",
  },
  wrongAnswer: {
    backgroundColor: "red",
  },
  submitButton:{
    backgroundColor:'blue',
    padding: 10,
    marginVertical:10,
    borderRadius:5,
    alignItems:'center',
  },
  submitText:{
     color:"#fff",
     fontSize:20,
  },
  Result:{
    alignItems:'center',
    justifyContent:'center',
  },
  resultTex:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:10,
  },
  tryAgain:{
    backgroundColor:"blue",
    padding:10,
    marginVertical:10,
    borderRadius:5,
  },
  tryAgainText:{
    color:'#fff',
    fontSize:20,
  }
});
