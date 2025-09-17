import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PrimeiraLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeiraLogo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Kids</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    amazonLogoImg: {
        marginTop: -32,
    },
});
